import { useNavigation } from '@react-navigation/native';
import React, { useRef, RefObject } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

import { styles } from './styles';

import { ImagePickerScreen } from '~/components/ImagePickerScreen';
import { SightingMap } from '~/components/SightingMap';
import { usePetsContext } from '~/context/petsContext';
import { SighthingType } from '~/types/sighthingTypes';

export const CreateLostPetPost = () => {
  const {
    petName,
    setPetName,
    petSpecies,
    setPetSpecies,
    petAge,
    setPetAge,
    petDescription,
    setPetDescription,
    sightings,
    setSightings,
    showSightings,
    setShowSightings,
    handleSubmitMissingPet,
    missingPetContact,
    setMissingPetContact,
  } = usePetsContext();

  const speciesInput = useRef(null);
  const ageInput = useRef(null);
  const descriptionInput = useRef(null);
  const sightingDateInput = useRef(null);
  const contactInput = useRef(null);

  const navigation = useNavigation();

  const handleNextInput = (nextInput: RefObject<HTMLInputElement>) => {
    nextInput.current.focus();
  };

  const handleRemoveSighting = (index: number) => {
    setSightings((prevSightings: any) => {
      const newSightings = [...prevSightings];
      newSightings.splice(index, 1);
      return newSightings;
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nome do Pet</Text>
        <TextInput
          style={styles.input}
          value={petName}
          onChangeText={(text: string) => setPetName(text.slice(0, 100))}
          onSubmitEditing={() => handleNextInput(speciesInput)}
          returnKeyType="next"
          placeholder="Nome..."
        />
        <Text style={styles.label}>Espécie</Text>
        <TextInput
          ref={speciesInput}
          style={styles.input}
          value={petSpecies}
          onChangeText={(text: string) => setPetSpecies(text.slice(0, 100))}
          onSubmitEditing={() => handleNextInput(ageInput)}
          returnKeyType="next"
          placeholder="Especie..."
        />
        <Text style={styles.label}>Idade do Pet</Text>
        <TextInput
          ref={ageInput}
          style={styles.input}
          value={petAge}
          onChangeText={(text: string) => setPetAge(text)}
          onSubmitEditing={() => handleNextInput(descriptionInput)}
          keyboardType="numeric"
          returnKeyType="next"
          maxLength={3}
          placeholder="Idade... Ex(0.x meses ou 2 anos)"
        />
        <Text style={styles.label}>Telefone para contato</Text>
        <TextInput
          ref={contactInput}
          style={styles.input}
          value={missingPetContact}
          onChangeText={(text: string) => setMissingPetContact(text)}
          onSubmitEditing={() => handleNextInput(descriptionInput)}
          keyboardType="numeric"
          returnKeyType="next"
          maxLength={11}
          placeholder="(00) 0000-0000"
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          ref={descriptionInput}
          style={[styles.input, styles.descriptionInput]}
          multiline
          numberOfLines={4}
          value={petDescription}
          onChangeText={setPetDescription}
          onSubmitEditing={() => handleNextInput(sightingDateInput)}
          returnKeyType="next"
          placeholder="Descrição..."
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('sightingModal')}>
          <Text style={styles.addButtonLabel}>Adicionar Avistamento</Text>
        </TouchableOpacity>
        {sightings.length > 0 && (
          <TouchableOpacity
            style={styles.showSightingButton}
            onPress={() => setShowSightings(!showSightings)}>
            <Text style={styles.showSightingButtonLabel}>
              {showSightings ? 'Esconder Avistamentos' : 'Ver Avistamentos'}
            </Text>
          </TouchableOpacity>
        )}
        {showSightings && (
          <>
            {sightings.map((item: SighthingType, index: number) => {
              return (
                <Card style={styles.sightingCard} key={index}>
                  <Card.Title
                    title={item.sightingDate}
                    titleVariant="titleMedium"
                    right={(props) => (
                      <IconButton
                        {...props}
                        icon="trash-can-outline"
                        onPress={() => handleRemoveSighting(index)}
                        style={{ paddingRight: 10 }}
                        size={20}
                      />
                    )}
                  />
                  <Card.Content>
                    <Text style={styles.sightingDescription} variant="bodyMedium">
                      {item.description}
                    </Text>
                    <Text variant="bodyMedium">{item.location.address}</Text>
                    <View style={styles.sightingLocation}>
                      <SightingMap isModal location={item.location} />
                    </View>
                  </Card.Content>
                </Card>
              );
            })}
          </>
        )}
        <ImagePickerScreen />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitMissingPet}>
          <Text style={styles.submitButtonText}>Enviar Publicação</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
