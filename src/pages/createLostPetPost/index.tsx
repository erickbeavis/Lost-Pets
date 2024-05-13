import { useNavigation } from '@react-navigation/native';
import React, { useRef, RefObject } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';

import { styles } from './styles';

import { ImagePickerScreen } from '~/components/ImagePickerScreen';
import { SightingMap } from '~/components/SightingMap';
import { usePetsContext } from '~/context/petsContext';
import { SighthingType } from '~/types/sighthingTypes';

export const CreateLostPetPost = () => {
  const {
    name,
    setName,
    species,
    setSpecies,
    age,
    setAge,
    description,
    setDescription,
    sightings,
    sightingDate,
    setSightingDate,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    sightingDescription,
    setSightingDescription,
    showSightings,
    addSightingVisible,
    setAddSightingVisible,
    handleAddSighting,
    handleSubmit,
  } = usePetsContext();

  const speciesInput = useRef(null);
  const ageInput = useRef(null);
  const descriptionInput = useRef(null);
  const sightingDateInput = useRef(null);
  const latitudeInput = useRef(null);
  const longitudeInput = useRef(null);
  const sightingDescriptionInput = useRef(null);

  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleNextInput = (nextInput: RefObject<HTMLInputElement>) => {
    nextInput.current.focus();
  };

  const handleLocationSelect = ({ latitude, longitude }: any) => {
    setLatitude(String(latitude));
    setLongitude(String(longitude));
  };

  const handleTextInputChange = (valueSetter: any) => (text: any) => {
    valueSetter(text);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text: string) => setName(text.slice(0, 100))}
          onSubmitEditing={() => handleNextInput(speciesInput)}
          returnKeyType="next"
        />
        <Text style={styles.label}>Espécie</Text>
        <TextInput
          ref={speciesInput}
          style={styles.input}
          value={species}
          onChangeText={(text: string) => setSpecies(text.slice(0, 100))}
          onSubmitEditing={() => handleNextInput(ageInput)}
          returnKeyType="next"
        />
        <Text style={styles.label}>Idade</Text>
        <TextInput
          ref={ageInput}
          style={styles.input}
          value={age}
          onChangeText={(text: string) => setAge(text.replace(/[^0-9]/g, '').slice(0, 2))}
          onSubmitEditing={() => handleNextInput(descriptionInput)}
          keyboardType="numeric"
          returnKeyType="next"
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          ref={descriptionInput}
          style={[styles.input, styles.descriptionInput]}
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={() => handleNextInput(sightingDateInput)}
          returnKeyType="next"
        />
        <TouchableOpacity style={styles.addButton} onPress={() => setAddSightingVisible(true)}>
          <Text style={styles.addButtonLabel}>Adicionar Avistamento</Text>
        </TouchableOpacity>
        {showSightings && (
          <>
            {sightings.map((item: SighthingType, index: number) => {
              return (
                <View style={styles.sightingItem} key={index}>
                  <Text style={styles.sightingDate}>{item.sightingDate}</Text>
                  <Text style={styles.sightingLocation}>
                    {item.location.latitude}, {item.location.longitude}
                  </Text>
                  <Text style={styles.sightingDescription}>{item.description}</Text>
                </View>
              );
            })}
          </>
        )}
        <ImagePickerScreen />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar Publicação</Text>
        </TouchableOpacity>
        <Modal visible={addSightingVisible} animationType="slide">
          <ScrollView style={[styles.container, styles.modalContainer]}>
            <TouchableOpacity onPress={() => setAddSightingVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Data do Avistamento</Text>
            <TextInput
              ref={sightingDateInput}
              style={styles.input}
              value={sightingDate}
              onChangeText={setSightingDate}
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              returnKeyType="next"
            />
            <Text style={styles.label}>Latitude</Text>
            <TextInput
              ref={latitudeInput}
              style={styles.input}
              value={latitude}
              onChangeText={handleTextInputChange(setLatitude)}
              keyboardType="numeric"
              returnKeyType="next"
            />
            <Text style={styles.label}>Longitude</Text>
            <TextInput
              ref={longitudeInput}
              style={styles.input}
              value={longitude}
              onChangeText={handleTextInputChange(setLongitude)}
              keyboardType="numeric"
              returnKeyType="next"
            />
            <Text style={styles.label}>Descrição do Avistamento</Text>
            <TextInput
              ref={sightingDescriptionInput}
              style={[styles.input, styles.descriptionInput]}
              multiline
              numberOfLines={4}
              value={sightingDescription}
              onChangeText={setSightingDescription}
              returnKeyType="done"
            />
            <Text style={styles.label}>Avistado pela ultima vez:</Text>
            <SightingMap onLocationSelect={handleLocationSelect} />
            <TouchableOpacity style={styles.submitButton} onPress={handleAddSighting}>
              <Text style={styles.submitButtonText}>Salvar</Text>
            </TouchableOpacity>
          </ScrollView>
        </Modal>
      </View>
    </ScrollView>
  );
};
