import axios from 'axios';

import { SighthingType } from '~/types/sighthingTypes';

export const createSighthing = async (petId: string, body: SighthingType) => {
  try {
    const { data } = await axios.post(`/missing-pet/${petId}/sighting`, {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};

export const deleteSighthing = async (petId: string, sightingId: string, body: SighthingType) => {
  try {
    await axios.delete(`/missing-pet/${petId}/sighting/${sightingId}`);
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};
