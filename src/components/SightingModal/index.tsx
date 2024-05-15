import { FlatList, TouchableOpacity, View, Modal } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import { styles } from './styles';
import { SightingMap } from '../SightingMap';

import { usePetsContext } from '~/context/petsContext';
import { SighthingType } from '~/types/sighthingTypes';

export const SightingModal = () => {
  const {
    addSightingVisible,
    setAddSightingVisible,
    sightingDate,
    sightingDescription,
    handleAddSighting,
    sightings,
    setSightingDate,
    setSightingDescription,
  } = usePetsContext();

  return (
    <Modal visible={addSightingVisible} animationType="slide">
      <FlatList
        style={[styles.container, styles.modalContainer]}
        data={sightings}
        renderItem={({ item }: { item: SighthingType }) => (
          <View style={styles.sightingItem}>
            <Text style={styles.sightingDate}>{item.sightingDate}</Text>
            <Text style={styles.sightingDescription}>{item.description}</Text>
            <SightingMap />
          </View>
        )}
        ListHeaderComponent={
          <>
            <TouchableOpacity onPress={() => setAddSightingVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Data do Avistamento</Text>
            <TextInput
              style={styles.input}
              value={sightingDate}
              onChangeText={setSightingDate}
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              returnKeyType="next"
            />
            <Text style={styles.label}>Descrição do Avistamento</Text>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              multiline
              numberOfLines={4}
              value={sightingDescription}
              onChangeText={setSightingDescription}
              returnKeyType="done"
            />
            <Text style={styles.label}>Local do avistamento</Text>
            <SightingMap />
            <TouchableOpacity style={styles.submitButton} onPress={handleAddSighting}>
              <Text style={styles.submitButtonText}>Salvar</Text>
            </TouchableOpacity>
          </>
        }
      />
    </Modal>
  );
};
