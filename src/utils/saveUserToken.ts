import { setItemAsync } from 'expo-secure-store';

export const saveUserToken = async (token: string) => {
  try {
    if (!token) return;

    await setItemAsync('userToken', token);
  } catch (e) {
    throw new Error(`Error ${e}`);
  }
};
