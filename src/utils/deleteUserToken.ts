import { deleteItemAsync } from 'expo-secure-store';

export const deleteUserToken = async () => {
  try {
    await deleteItemAsync('userToken');
  } catch (e) {
    throw new Error(`Error ${e}`);
  }
};
