import axios from 'axios';

import { MissingPetType } from '~/types/missingPetTypes';

export const addMissingPet = async (body: MissingPetType) => {
  try {
    const { data } = await axios.post<Promise<MissingPetType>>('/missing-pet', {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const getMissingPet = async () => {
  try {
    const { data } = await axios.get<Promise<MissingPetType>>('/missing-pet');

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const editMissingPet = async (petId: string, body: MissingPetType) => {
  try {
    const { data } = await axios.put<Promise<MissingPetType>>(`/missing-pet/${petId}`, {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const deleteMissingPet = async (petId: string) => {
  try {
    await axios.delete<Promise<MissingPetType>>(`/missing-pet/${petId}`);
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const deactivateMissingPet = async (petId: string) => {
  try {
    await axios.delete<Promise<MissingPetType>>(`/missing-pet/${petId}/deactivate`);
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};
