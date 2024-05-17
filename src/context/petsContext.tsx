import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, ReactNode, useState } from 'react';

import { LocationType } from '~/types/locationTypes';
import { ImageType } from '~/types/photoTypes';
import { SighthingType } from '~/types/sighthingTypes';

type MyContextType = {
  petName: string;
  setPetName: (petName: string) => void;
  petSpecies: string;
  setPetSpecies: (petSpecies: string) => void;
  petAge: string;
  setPetAge: (petAge: string) => void;
  petDescription: string;
  setPetDescription: (petDescription: string) => void;
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
  handleSubmitMissingPet: () => void;
  sightingLocation: LocationType;
  setSightingLocation: (sightingLocation: LocationType) => void;
  missingPetPost: any[];
  setMissingPetPost: (missingPetPost: any[]) => void;
  petPhoto: any[];
  setPetPhoto: (petPhoto: any) => void;
  missingPetContact: string;
  setMissingPetContact: (missingPetContact: string) => void;
  handleRemoveSighting: (index: number) => void;
};

const PetsContext = createContext<MyContextType | undefined>(undefined);

export const PetsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petDescription, setPetDescription] = useState('');

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
  const [petPhoto, setPetPhoto] = useState<any>([]);
  const [sightings, setSightings] = useState<SighthingType[]>([]);
  const [missingPetContact, setMissingPetContact] = useState('');

  const [missingPetPost, setMissingPetPost] = useState<any[]>([]);

  const { latitude, longitude, address } = sightingLocation;

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

  const handleRemoveSighting = (index: number) => {
    setSightings((prevSightings: any) => {
      const newSightings = [...prevSightings];
      newSightings.splice(index, 1);
      return newSightings;
    });
  };

  const handleSubmitMissingPet = () => {
    // if (!petName || !petSpecies || !petAge || !petDescription || sightings.length === 0) {
    //   alert('É necessário preencher todos os campos informados e pelos menos um avistamento');
    //   return;
    // }

    const postData = {
      id: '',
      createdAt: new Date().toLocaleDateString('pt-br'),
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
      user: {
        id: '',
        createdAt: '2024-05-16T13:35:43.174Z',
        updatedAt: '2024-05-16T13:35:43.174Z',
        email: 'user@example.com',
        contacts: [
          {
            id: '',
            createdAt: '2024-05-16T13:35:43.174Z',
            updatedAt: '2024-05-16T13:35:43.174Z',
            content: missingPetContact,
            type: 0,
          },
        ],
      },
      pet: {
        id: '',
        name: petName,
        species: petSpecies,
        age: Number(petAge),
        photos: petPhoto.map((photo: ImageType, index: number) => ({
          id: index.toString(),
          location: photo.uri,
          content: '',
        })),
        description: petDescription,
      },
      comments: [],
      status: 0,
    };

    setMissingPetPost((prevPost) => [...prevPost, postData]);

    setPetName('');
    setPetSpecies('');
    setPetAge('');
    setPetDescription('');
    setSightings([]);
    setPetPhoto([]);
    setMissingPetContact('');
  };

  return (
    <PetsContext.Provider
      value={{
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
        sightingDate,
        setSightingDate,
        sightingDescription,
        setSightingDescription,
        showSightings,
        setShowSightings,
        addSightingVisible,
        setAddSightingVisible,
        handleAddSighting,
        handleSubmitMissingPet,
        sightingLocation,
        setSightingLocation,
        missingPetPost,
        setMissingPetPost,
        petPhoto,
        setPetPhoto,
        missingPetContact,
        setMissingPetContact,
        handleRemoveSighting,
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
