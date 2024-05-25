import { CommentsType } from './commentTypes';
import { PetTypeRequest } from './petTypes';
import { SighthingTypeRequest } from './sighthingTypes';
import { LoggedUser } from './userTypes';

export interface MissingPetTypeRequest {
  sightings: SighthingTypeRequest[];
  pet: PetTypeRequest;
  status: number; // 0 - Lost | 1 - Found | 2 - Deactivated
}

export interface MissingPetType {
  comments: CommentsType[];
  createdAt: string;
  updatedAt: string;
  id: string;
  sightings: SighthingTypeRequest[];
  pet: PetTypeRequest;
  user: LoggedUser;
  status: number; // 0 - Lost | 1 - Found | 2 - Deactivated
}
