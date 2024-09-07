import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon, IconButton, Text } from 'react-native-paper';

import { styles } from './styles';

import { Loading } from '~/components/Loading';
import { SightingMap } from '~/components/SightingMap';
import { usePetsContext } from '~/context/petsContext';
import { SearchSightingNavigationProp } from '~/types/navigationTypes';

export const SightingModal = () => {
  const {
    sightingDescription,
    handleAddSighting,
    setSightingDate,
    setSightingDescription,
    sightingLocation,
  } = usePetsContext();

  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const navigation = useNavigation<SearchSightingNavigationProp>();
  const routes = useRoute();

  const isPost = routes.params?.isPost as boolean;
  const missingPetId = routes.params?.missingPetId as string;

  const handleSightingDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;

    setShowDate(false);
    setDate(currentDate);
    setSightingDate(currentDate);
  };

  return (
    <>
      <Loading />
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Data do Avistamento</Text>
        <TouchableOpacity
          onPress={() => setShowDate(true)}
          style={[styles.input, styles.dateInput]}>
          <Text style={styles.dateLabel}>{date.toLocaleDateString('pt-br')}</Text>
          <Icon source="calendar-month" size={18} />
        </TouchableOpacity>
        {showDate && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleSightingDate}
          />
        )}
        <Text style={styles.label}>Descrição do Avistamento</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          multiline
          numberOfLines={4}
          value={sightingDescription}
          placeholder="Descrição..."
          onChangeText={setSightingDescription}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.sightingPlaceContainer}
          onPress={() =>
            navigation.navigate(
              'searchSighting',
              isPost && missingPetId
                ? {
                    isPost,
                    missingPetId,
                  }
                : {}
            )
          }>
          <Text style={[styles.label, styles.sightingPlaceLabel]}>Local do avistamento</Text>
          <IconButton icon="arrow-right" />
        </TouchableOpacity>
        <Text variant="titleMedium" style={styles.sightingAddres}>
          {sightingLocation.address}
        </Text>
        {sightingLocation.latitude !== 0 && sightingLocation.longitude !== 0 && (
          <View style={{ marginBottom: 20, marginTop: 20 }}>
            <SightingMap isModal location={sightingLocation} />
          </View>
        )}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => handleAddSighting(isPost, missingPetId || '')}>
          <Text style={styles.submitButtonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
