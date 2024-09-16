import axios from 'axios';

type CommentsType = {
  missingPetId?: string;
  content: string;
};

const URL = process.env.URL;

export const createComment = async (body: CommentsType, autCookie: string) => {
  const { data } = await axios.post(`${URL}/api/Comment`, body, {
    headers: {
      Authorization: `Bearer ${autCookie}`,
    },
  });

  return data;
};

export const updateComment = async (commentId: string, body: CommentsType, autCookie: string) => {
  const { data } = await axios.put(`${URL}/api/Comment/${commentId}`, body, {
    headers: {
      Authorization: `Bearer ${autCookie}`,
    },
  });

  return data;
};

export const deleteComment = async (commentId: string, autCookie: string) => {
  return await axios.delete(`${URL}/api/Comment/${commentId}`, {
    headers: {
      Authorization: `Bearer ${autCookie}`,
    },
  });
};
