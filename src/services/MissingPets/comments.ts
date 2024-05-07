import axios from 'axios';

import { CommentsType } from '~/types/missingPetTypes';

export const createComment = async (body: CommentsType) => {
  try {
    const { data } = await axios.post('/comment', {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};

export const updateComment = async (petId: string, commentId: string, body: CommentsType) => {
  try {
    const { data } = await axios.put(`/missing-pet/${petId}/comment/${commentId}`, {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};

export const deleteComment = async (petId: string, commentId: string) => {
  try {
    await axios.delete(`/missing-pet/${petId}/comment/${commentId}`);
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};
