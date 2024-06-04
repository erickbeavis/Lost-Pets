import { useNavigation } from '@react-navigation/native';
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

import { addMissingPet, getMissingPet } from '~/services/MissingPets/missingPets';
import { createSighthing, deleteSighthing } from '~/services/MissingPets/sighthings';
import { loginUser, registerUser } from '~/services/Users/users';
import { LocationType } from '~/types/locationTypes';
import { ImageType } from '~/types/photoTypes';
import { SighthingType } from '~/types/sighthingTypes';
import { LoggedUser, LoginResponse, UserRequestBody } from '~/types/userTypes';
import { getUserToken } from '~/utils/getUserToken';
import { saveUserToken } from '~/utils/saveUserToken';

type FeedLocationType = {
  address: string;
  lat: number;
  lng: number;
};

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
  handleAddSighting: (isPost: boolean, missingPetId: string) => void;
  handleSubmitMissingPet: () => void;
  sightingLocation: LocationType;
  setSightingLocation: (sightingLocation: LocationType) => void;
  missingPetPost: any[];
  setMissingPetPost: (missingPetPost: never[]) => void;
  petPhoto: any[];
  setPetPhoto: (petPhoto: any) => void;
  missingPetContact: string;
  setMissingPetContact: (missingPetContact: string) => void;
  handleRemoveSighting: (index: string) => void;
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
  isFeedLocation: boolean;
  setIsFeedLocation: (isFeedLocation: boolean) => void;
  feedLocation: FeedLocationType;
  setFeedLocation: (feedLocation: FeedLocationType) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleSubmitLogin: (user: string, password: string) => void;
  loggedUser: LoggedUser;
  setLoggedUser: (loggedUser: LoggedUser) => void;
  handleRegisterUser: (data: UserRequestBody) => void;
  handleSearchMissingPet: () => void;
  postSightings: any;
  setPostSightings: (postSightings: any) => void;
};

const PetsContext = createContext<MyContextType | undefined>(undefined);

export const PetsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [isFeedLocation, setIsFeedLocation] = useState(false);
  const [feedLocation, setFeedLocation] = useState<FeedLocationType>({
    address: '',
    lat: 0,
    lng: 0,
  });

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
  const [missingPetContact, setMissingPetContact] = useState('');
  const [postSightings, setPostSightings] = useState<any>([]);

  const [sightings, setSightings] = useState<SighthingType[]>([]);
  const [missingPetPost, setMissingPetPost] = useState([]);

  const [loggedUser, setLoggedUser] = useState<any>({});

  const { latitude, longitude, address } = sightingLocation;

  const navigation = useNavigation();

  const handleRegisterUser = async (data: UserRequestBody) => {
    try {
      setLoading(true);

      if (
        data.email === '' ||
        data.password === '' ||
        data.userName === '' ||
        data.contacts[0].content === ''
      ) {
        alert('Preencha todos os campos');
        setLoading(false);

        return;
      }

      await registerUser(data);

      setLoading(false);

      alert('Usuario cadastrado com sucesso!');
      navigation.navigate('login');
    } catch (err) {
      setLoading(false);

      throw new Error(`Error ${err}`);
    }
  };

  const handleSubmitLogin = async (email: string, password: string) => {
    try {
      setLoading(true);

      const data: LoginResponse = await loginUser({
        email,
        password,
      });

      const { token, user } = data;

      saveUserToken(token);
      setLoggedUser(user);

      return navigation.reset({
        index: 0,
        routes: [{ name: 'feed' }],
      });
    } catch {
      alert('Usúario ou senha incorreta');
      return;
    } finally {
      setLoading(false);
    }
  };

  const handleAddSighting = async (isPost: boolean, missingPetId: string) => {
    if (!sightingDate || !sightingLocation || !sightingDescription) {
      alert('É necessário preencher todos os campos informados');
      return;
    }

    const autCookie = await getUserToken();

    if (!autCookie) return;

    let newSighting = {
      user: loggedUser.user,
      sightingDate,
      location: {
        latitude,
        longitude,
        address,
      },
      description: sightingDescription,
      missingPetId,
    };

    if (isPost) {
      const { data } = await createSighthing(newSighting, autCookie);

      await handleSearchMissingPet();

      newSighting = data;
    }

    setSightings([...sightings, newSighting]);
    setSightingDate('');
    setSightingDescription('');
    setShowSightings(true);
    setAddSightingVisible(false);

    navigation.goBack();
  };

  const handleRemoveSighting = async (sightingId: string) => {
    const autCookie = await getUserToken();

    if (!autCookie) return;

    await deleteSighthing(sightingId, autCookie);

    await handleSearchMissingPet();
  };

  const handleSubmitMissingPet = async () => {
    if (!petName || !petSpecies || !petAge || !petDescription || sightings.length === 0) {
      alert('É necessário preencher todos os campos informados e pelos menos um avistamento');
      return;
    }

    const postData = {
      sightings: sightings.map((sighting, index) => ({
        sightingDate: sighting.sightingDate,
        location: {
          latitude: sighting.location.latitude,
          longitude: sighting.location.longitude,
          address: sighting.location.address,
        },
        description: sighting.description,
      })),
      pet: {
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
      status: 0,
    };

    const token = await getUserToken();

    if (!token) return;

    await addMissingPet(postData, token);

    setPetName('');
    setPetSpecies('');
    setPetAge('');
    setPetDescription('');
    setSightings([]);
    setPetPhoto([]);
    setMissingPetContact('');

    handleSearchMissingPet();
    setTabIndex(0);
  };

  const handleSearchMissingPet = async () => {
    setLoading(true);

    const data = (await getMissingPet(feedLocation.lat, feedLocation.lng, 10000000)) as any;

    setMissingPetPost(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    setIsFeedLocation(false);

    if (tabIndex === 2) setIsFeedLocation(true);
  }, [tabIndex]);

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
        handleSubmitLogin,
        sightingLocation,
        setSightingLocation,
        missingPetPost,
        setMissingPetPost,
        petPhoto,
        setPetPhoto,
        missingPetContact,
        setMissingPetContact,
        handleRemoveSighting,
        tabIndex,
        setTabIndex,
        isFeedLocation,
        setIsFeedLocation,
        feedLocation,
        setFeedLocation,
        loading,
        setLoading,
        loggedUser,
        setLoggedUser,
        handleRegisterUser,
        handleSearchMissingPet,
        postSightings,
        setPostSightings,
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
