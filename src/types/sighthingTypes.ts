import { LocationType } from './locationTypes';

export interface SighthingType {
  id: string;
  sightingDate: string;
  location: LocationType;
  userId: string;
  description: string;
}

export interface SighthingTypeRequest {
  sightingDate: string;
  location: LocationType;
  description: string;
  missingPetId?: string;
}
