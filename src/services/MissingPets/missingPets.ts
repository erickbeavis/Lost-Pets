import axios from 'axios';

import { MissingPetTypeRequest } from '~/types/missingPetTypes';

const URL = process.env.URL;

export const addMissingPet = async (body: MissingPetTypeRequest, autCookie: string) => {
  try {
    const { data } = await axios.post<Promise<MissingPetTypeRequest>>(
      `${URL}/api/MissingPet`,
      body,
      {
        headers: {
          Authorization: `Bearer ${autCookie}`,
        },
      }
    );

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const getMissingPet = async (lat: number, lng: number, radius: number) => {
  try {
    const { data } = await axios.get<Promise<MissingPetTypeRequest>>(
      `${URL}/api/MissingPet?latitude=${lat}&longitude=${lng}&radius=${radius}`
    );

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const getMissingPetId = async (id: string) => {
  try {
    const { data } = await axios.get<Promise<MissingPetTypeRequest>>(`${URL}/api/MissingPet/${id}`);

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const editMissingPet = async (petId: string, body: MissingPetTypeRequest) => {
  try {
    const { data } = await axios.put<Promise<MissingPetTypeRequest>>(`/missing-pet/${petId}`, {
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
    await axios.delete<Promise<MissingPetTypeRequest>>(`/missing-pet/${petId}`);
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const deactivateMissingPet = async (petId: string) => {
  try {
    await axios.delete<Promise<MissingPetTypeRequest>>(`/missing-pet/${petId}/deactivate`);
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};
