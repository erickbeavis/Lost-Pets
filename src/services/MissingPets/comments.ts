import axios from 'axios';

type CommentsType = {
  missingPetId?: string;
  content: string;
};

const URL = process.env.URL;

export const createComment = async (body: CommentsType, autCookie: string) => {
  try {
    const { data } = await axios.post(`${URL}/api/Comment`, body, {
      headers: {
        Authorization: `Bearer ${autCookie}`,
      },
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};

export const updateComment = async (commentId: string, body: CommentsType, autCookie: string) => {
  try {
    const { data } = await axios.put(`${URL}/api/Comment/${commentId}`, body, {
      headers: {
        Authorization: `Bearer ${autCookie}`,
      },
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};

export const deleteComment = async (commentId: string, autCookie: string) => {
  try {
    return await axios.delete(`${URL}/api/Comment/${commentId}`, {
      headers: {
        Authorization: `Bearer ${autCookie}`,
      },
    });
  } catch (err) {
    throw new Error(`Erro ${err}`);
  }
};
