import { PetTypeRequest } from './petTypes';
import { SighthingTypeRequest } from './sighthingTypes';

export interface MissingPetTypeRequest {
  sightings: SighthingTypeRequest[];
  pet: PetTypeRequest;
  status: number; // 0 - Lost | 1 - Found | 2 - Deactivated
}
