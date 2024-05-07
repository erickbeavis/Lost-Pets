import { ContactType } from './contactTypes';

export interface UserRequestBody {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contacts: ContactType[];
}
