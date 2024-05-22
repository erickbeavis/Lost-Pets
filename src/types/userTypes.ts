import { CommentsType } from './commentTypes';
import { ContactType } from './contactTypes';
import { MissingPetType } from './missingPetTypes';
import { SighthingType } from './sighthingTypes';

export interface UserRequestBody {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contacts: ContactType[];
}

export interface UserLoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserRequestBody;
}

export interface LoggedUser {
  email: string;
  sightings: SighthingType;
  comments: CommentsType;
  missingPets: MissingPetType;
  contacts: ContactType;
  id: string;
  createdAt: string;
  updatedAt: null | string;
}
