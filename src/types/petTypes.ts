import { PhotoType } from './photoTypes';

export interface PetType {
  id: string;
  name: string;
  species: string;
  age: string;
  photos: PhotoType[];
  description: string;
}

export interface PetTypeRequest {
  name: string;
  species: string;
  age: string;
  photos?: PhotoType[];
  description: string;
}
