import { CommentsType } from './commentTypes';
import { PetType } from './petTypes';
import { SighthingType } from './sighthingTypes';
import { UserRequestBody } from './userTypes';

export interface MissingPetType {
  id: string;
  createdAt: string;
  sightings: SighthingType[];
  user: UserRequestBody;
  pet: PetType;
  comments: CommentsType;
  status: number; // 0 - Lost | 1 - Found | 2 - Deactivated
}
