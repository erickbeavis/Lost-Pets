import axios from 'axios';

import { EditMissingPetType, MissingPetTypeRequest } from '~/types/missingPetTypes';

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

export const editMissingPet = async (
  petId: string,
  body: EditMissingPetType,
  autCookie: string
) => {
  try {
    const { data } = await axios.put<Promise<MissingPetTypeRequest>>(
      `${URL}/api/MissingPet/${petId}`,
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

export const deleteMissingPet = async (petId: string, autCookie: string) => {
  try {
    return await axios.delete<Promise<MissingPetTypeRequest>>(`${URL}/api/MissingPet/${petId}`, {
      headers: {
        Authorization: `Bearer ${autCookie}`,
      },
    });
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
