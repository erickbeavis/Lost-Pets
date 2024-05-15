import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, IconButton, Text, TextInput } from 'react-native-paper';

import { styles } from './styles';

import { SightingMap } from '~/components/SightingMap';
import { usePetsContext } from '~/context/petsContext';

export const SightingModal = () => {
  const {
    sightingDate,
    sightingDescription,
    handleAddSighting,
    setSightingDate,
    setSightingDescription,
    sightingRegion,
  } = usePetsContext();

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Data do Avistamento</Text>
      <TextInput
        style={styles.input}
        value={sightingDate}
        onChangeText={setSightingDate}
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
      <Card style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('searchSighting')}>
          <Card.Title
            title="Local do avistamento"
            titleVariant="titleMedium"
            style={styles.cardLabel}
            right={(props) => <IconButton {...props} icon="arrow-right-bold" />}
          />
        </TouchableOpacity>
      </Card>
      {sightingRegion.latitude !== 0 && sightingRegion.longitude !== 0 && <SightingMap />}
      <TouchableOpacity style={styles.submitButton} onPress={handleAddSighting}>
        <Text style={styles.submitButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
