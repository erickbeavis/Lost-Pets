import { useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, ReactNode, useState } from 'react';

import { RegionType } from '~/types/locationTypes';

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
  latitude: string;
  setLatitude: (latitude: string) => void;
  longitude: string;
  setLongitude: (logintude: string) => void;
  sightingDescription: string;
  setSightingDescription: (sightingDescription: string) => void;
  showSightings: boolean;
  setShowSightings: (showSightings: boolean) => void;
  addSightingVisible: boolean;
  setAddSightingVisible: (addSightingVisible: boolean) => void;
  handleAddSighting: () => void;
  handleSubmit: () => void;
  region: RegionType;
  setRegion: (region: RegionType) => void;
};

const PetsContext = createContext<MyContextType | undefined>(undefined);

export const PetsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [sightings, setSightings] = useState<any[]>([]);

  const [sightingDate, setSightingDate] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [sightingDescription, setSightingDescription] = useState('');
  const [showSightings, setShowSightings] = useState(false);
  const [addSightingVisible, setAddSightingVisible] = useState(false);

  const [region, setRegion] = useState<RegionType>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0022,
  });

  const navigation = useNavigation();

  const handleAddSighting = () => {
    if (!sightingDate || !latitude || !longitude || !sightingDescription) {
      alert('É necessário preencher todos os campos informados');
      return;
    }

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

  const handleSubmit = () => {
    if (!name || !species || !age || !description || sightings.length === 0) {
      alert('É necessário preencher todos os campos informados e pelos menos um avistamento');
      return;
    }

    const publicationData = {
      id: '',
      createdAt: new Date().toISOString(),
      sightings: sightings.map((sighting, index) => ({
        id: index.toString(),
        sightingDate: sighting.sightingDate,
        location: {
          latitude: parseFloat(sighting.location.latitude),
          longitude: parseFloat(sighting.location.longitude),
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

    console.log('Publicação enviada:', publicationData);
    navigation.navigate('feed');
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
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        sightingDescription,
        setSightingDescription,
        showSightings,
        setShowSightings,
        addSightingVisible,
        setAddSightingVisible,
        handleAddSighting,
        handleSubmit,
        region,
        setRegion,
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
