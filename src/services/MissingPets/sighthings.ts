import axios from 'axios';

import { SighthingType, SighthingTypeRequest } from '~/types/sighthingTypes';

const URL = process.env.URL;

export const createSighthing = async (body: SighthingTypeRequest, autCookie: string) => {
  try {
    return await axios.post(`${URL}/api/Sighting`, body, {
      headers: {
        Authorization: `Bearer ${autCookie}`,
      },
    });
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};

export const deleteSighthing = async (sightingId: string, autCookie: string) => {
  try {
    await axios.delete(`${URL}/api/Sighting/${sightingId}`, {
      headers: {
        Authorization: `Bearer ${autCookie}`,
      },
    });
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};
