import { getItemAsync } from 'expo-secure-store';

export const getToken = async () => {
  try {
    const token = await getItemAsync('userToken');

    if (!token) {
      console.log('erro a');
      return;
    }

    console.log('Token recuperado:', token);
    return token;
  } catch (e) {
    throw new Error(`Error ${e}`);
  }
};
