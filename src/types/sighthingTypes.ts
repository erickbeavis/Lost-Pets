import { LocationType } from './locationTypes';
import { LoggedUser } from './userTypes';

export interface SighthingType {
  id?: string;
  sightingDate: string;
  location: LocationType;
  description: string;
  user: LoggedUser;
}

export interface SighthingTypeRequest {
  sightingDate: string;
  location: LocationType;
  description: string;
  missingPetId?: string;
}
