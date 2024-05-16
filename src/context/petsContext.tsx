import { useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, ReactNode, useState } from 'react';

import { LocationType } from '~/types/locationTypes';
import { SighthingType } from '~/types/sighthingTypes';

type MyContextType = {
  name: string;
  setName: (name: string) => void;
  species: string;
  setSpecies: (species: string) => void;
  age: string;
  setAge: (age: string) => void;
  description: string;
  setDescription: (description: string) => void;
  sightings: any[];
  setSightings: (sightings: any) => void;
  sightingDate: string;
  setSightingDate: (sightingDate: string) => void;
  sightingDescription: string;
  setSightingDescription: (sightingDescription: string) => void;
  showSightings: boolean;
  setShowSightings: (showSightings: boolean) => void;
  addSightingVisible: boolean;
  setAddSightingVisible: (addSightingVisible: boolean) => void;
  handleAddSighting: () => void;
  handleSubmit: () => void;
  sightingLocation: LocationType;
  setSightingLocation: (sightingLocation: LocationType) => void;
  missingPetPost: any[];
  setMissingPetPost: (missingPetPost: any[]) => void;
};

const PetsContext = createContext<MyContextType | undefined>(undefined);

export const PetsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [sightingDate, setSightingDate] = useState('');
  const [sightingDescription, setSightingDescription] = useState('');
  const [showSightings, setShowSightings] = useState(false);
  const [addSightingVisible, setAddSightingVisible] = useState(false);

  const [sightingLocation, setSightingLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0032,
    longitudeDelta: 0.0032,
    address: '',
  });

  const { latitude, longitude, address } = sightingLocation;

  const [sightings, setSightings] = useState<SighthingType[]>([]);

  const [missingPetPost, setMissingPetPost] = useState<any[]>([]);

  const navigation = useNavigation();

  const handleAddSighting = () => {
    if (!sightingDate || !sightingLocation || !sightingDescription) {
      alert('É necessário preencher todos os campos informados');
      return;
    }

    const newSighting = {
      id: '',
      userId: '',
      sightingDate,
      location: {
        latitude,
        longitude,
        address,
      },
      description: sightingDescription,
    };

    setSightings([...sightings, newSighting]);
    setSightingDate('');
    setSightingDescription('');
    setShowSightings(true);
    setAddSightingVisible(false);

    navigation.goBack();
  };

  const handleSubmit = () => {
    if (!name || !species || !age || !description || sightings.length === 0) {
      alert('É necessário preencher todos os campos informados e pelos menos um avistamento');
      return;
    }

    const postData = {
      id: '',
      createdAt: new Date().toISOString(),
      sightings: sightings.map((sighting, index) => ({
        id: index.toString(),
        sightingDate: sighting.sightingDate,
        location: {
          latitude: sighting.location.latitude,
          longitude: sighting.location.longitude,
        },
        userId: '',
        description: sighting.description,
      })),
      userId: '',
      pet: {
        id: '',
        name,
        species,
        age: Number(age),
        photos: [],
        description,
      },
      comments: [],
      status: 0,
    };

    setMissingPetPost([postData]);
    navigation.navigate('feed');

    setName('');
    setSpecies('');
    setAge('');
    setDescription('');
    setSightings([]);
  };

  return (
    <PetsContext.Provider
      value={{
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
        sightingDate,
        setSightingDate,
        sightingDescription,
        setSightingDescription,
        showSightings,
        setShowSightings,
        addSightingVisible,
        setAddSightingVisible,
        handleAddSighting,
        handleSubmit,
        sightingLocation,
        setSightingLocation,
        missingPetPost,
        setMissingPetPost,
      }}>
      {children}
    </PetsContext.Provider>
  );
};

export const usePetsContext = (): MyContextType => {
  const context = useContext(PetsContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }

  return context;
};
