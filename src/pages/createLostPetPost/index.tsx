import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, RefObject } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';

import { styles } from './styles';

import { ImagePickerScreen } from '~/components/ImagePickerScreen';
import { SighthingType } from '~/types/sighthing';
import { formatDate } from '~/utils/formatDate';

export const CreateLostPetPost = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [sightings, setSightings] = useState<SighthingType>([]);
  const [sightingDate, setSightingDate] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [sightingDescription, setSightingDescription] = useState('');
  const [showSightings, setShowSightings] = useState(false);
  const [addSightingVisible, setAddSightingVisible] = useState(false);

  const speciesInput = useRef(null) as HTMLInputElement;
  const ageInput = useRef(null);
  const descriptionInput = useRef(null);
  const sightingDateInput = useRef(null);
  const latitudeInput = useRef(null);
  const longitudeInput = useRef(null);
  const sightingDescriptionInput = useRef(null);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    navigation.navigate('feed');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleNextInput = (nextInput: RefObject<HTMLInputElement>) => {
    nextInput.current.focus();
  };

  const handleAddSighting = () => {
    const newSighting = {
      sightingDate,
      location: {
        latitude,
        longitude,
      },
      description: sightingDescription,
    };
    setSightings([...sightings, newSighting]);
    setSightingDate('');
    setLatitude('');
    setLongitude('');
    setSightingDescription('');
    setShowSightings(true);
    setAddSightingVisible(false);
  };

  const handleSightingDate = (date: string) => {
    setSightingDate(formatDate(date));
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
              onChangeText={handleSightingDate}
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              returnKeyType="next"
            />
            <Text style={styles.label}>Latitude</Text>
            <TextInput
              ref={latitudeInput}
              style={styles.input}
              value={latitude}
              onChangeText={setLatitude}
              keyboardType="numeric"
              returnKeyType="next"
            />
            <Text style={styles.label}>Longitude</Text>
            <TextInput
              ref={longitudeInput}
              style={styles.input}
              value={longitude}
              onChangeText={setLongitude}
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
            <TouchableOpacity style={styles.submitButton} onPress={handleAddSighting}>
              <Text style={styles.submitButtonText}>Salvar</Text>
            </TouchableOpacity>
          </ScrollView>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default CreateLostPetPost;
