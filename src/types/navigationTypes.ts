import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

type RootStackParamList = {
  sightingModal: {
    isPost: boolean;
    missingPetId: string;
  };
  searchSighting: {
    isPost: boolean;
    missingPetId: string;
  };
};

export type SightingModalNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'sightingModal'
>;
export type SearchSightingNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'searchSighting'
>;
