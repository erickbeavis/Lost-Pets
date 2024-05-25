import axios from 'axios';

import { MissingPetTypeRequest } from '~/types/missingPetTypes';

const URL = process.env.URL;

export const addMissingPet = async (body: MissingPetTypeRequest, autCookie: string) => {
  console.log('TCL  addMissingPet  body:', body);
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
  console.log('TCL  getMissingPet  lat:', lat);
  try {
    const { data } = await axios.get<Promise<MissingPetTypeRequest>>(
      `https://577a-2804-14d-8e80-576f-786b-5426-60ff-e173.ngrok-free.app/api/MissingPet?latitude=${lat}&longitude=${lng}&radius=${radius}`
    );

    console.log('TCL  getMissingPet  data:', data);
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
