import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { styles } from './styles';

export const CreateLostPetPost = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [sightings, setSightings] = useState([]);
  const [sightingDate, setSightingDate] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [sightingDescription, setSightingDescription] = useState('');
  const [showSightings, setShowSightings] = useState(false);

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
    // Limpar os campos do formulário de avistamento após adicionar o avistamento
    setSightingDate('');
    setLatitude('');
    setLongitude('');
    setSightingDescription('');
  };

  console.log('bruno');

  const navigation = useNavigation();

  // const handleSightingLocation = () => {};

  const handleSubmit = async () => {
    return await axios('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCancel}>
        <Text style={styles.cancelText}>Cancelar</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Espécie</Text>
      <TextInput style={styles.input} value={species} onChangeText={setSpecies} />
      <Text style={styles.label}>Idade</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge} />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setShowSightings(!showSightings)}>
        <Text style={styles.addButtonLabel}>
          {showSightings ? 'Esconder Avistamentos' : 'Ver Avistamentos'}
        </Text>
      </TouchableOpacity>
      {showSightings && (
        <>
          <FlatList
            data={sightings}
            renderItem={({ item }) => (
              <View style={styles.sightingItem}>
                <Text style={styles.sightingDate}>{item.sightingDate}</Text>
                <Text style={styles.sightingLocation}>
                  {item.location.latitude}, {item.location.longitude}
                </Text>
                <Text style={styles.sightingDescription}>{item.description}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.label}>Adicionar Novo Avistamento:</Text>
          <TextInput
            style={styles.input}
            placeholder="Data do Avistamento"
            value={sightingDate}
            onChangeText={setSightingDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Latitude"
            value={latitude}
            onChangeText={setLatitude}
          />
          <TextInput
            style={styles.input}
            placeholder="Longitude"
            value={longitude}
            onChangeText={setLongitude}
          />
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            multiline
            numberOfLines={4}
            placeholder="Descrição do Avistamento"
            value={sightingDescription}
            onChangeText={setSightingDescription}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleAddSighting}>
            <Text style={styles.submitButtonText}>Adicionar Avistamento</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.label}>Fotos</Text>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Publicação</Text>
      </TouchableOpacity>
    </View>
  );
};
