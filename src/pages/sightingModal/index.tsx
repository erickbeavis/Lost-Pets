import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton, Text } from 'react-native-paper';

import { styles } from './styles';

import { SightingMap } from '~/components/SightingMap';
import { usePetsContext } from '~/context/petsContext';
import { formatDate } from '~/utils/formatDate';

export const SightingModal = () => {
  const {
    sightingDate,
    sightingDescription,
    handleAddSighting,
    setSightingDate,
    setSightingDescription,
    sightingLocation,
  } = usePetsContext();

  const navigation = useNavigation();

  const handleSightingDate = (e: string) => {
    setSightingDate(formatDate(e));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Data do Avistamento</Text>
      <TextInput
        style={styles.input}
        value={sightingDate}
        onChangeText={handleSightingDate}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
        returnKeyType="next"
        mode="outlined"
      />
      <Text style={styles.label}>Descrição do Avistamento</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        multiline
        numberOfLines={4}
        value={sightingDescription}
        placeholder="Descrição..."
        onChangeText={setSightingDescription}
        returnKeyType="done"
        mode="outlined"
      />
      <TouchableOpacity
        style={styles.sightingPlaceContainer}
        onPress={() => navigation.navigate('searchSighting')}>
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
      <TouchableOpacity style={styles.submitButton} onPress={handleAddSighting}>
        <Text style={styles.submitButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
