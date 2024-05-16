import { useNavigation } from '@react-navigation/native';
import React, { useRef, RefObject, useEffect } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-virtualized-view';

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
    setSightings,
    showSightings,
    handleSubmit,
  } = usePetsContext();

  const speciesInput = useRef(null);
  const ageInput = useRef(null);
  const descriptionInput = useRef(null);
  const sightingDateInput = useRef(null);

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
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('sightingModal')}>
          <Text style={styles.addButtonLabel}>Adicionar Avistamento</Text>
        </TouchableOpacity>
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
        {/* <ImagePickerScreen /> */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar Publicação</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
