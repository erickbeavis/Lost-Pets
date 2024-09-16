import axios from 'axios';

type RequestBody = {
  type: number; // 0 - Email | 1 - Phone | 2 - WPP | 3 - URL
  contact: string;
};

export const createContact = async (body: RequestBody) => {
  const { data } = await axios.post('/api/Contact', {
    body,
  });

  return data;
};

export const updateContact = async (contactId: string, body: RequestBody) => {
  const { data } = await axios.put(`/api/Contact/${contactId}`, {
    body,
  });

  return data;
};

export const deleteContact = async (contactId: string) => {
  return await axios.delete(`/api/Contact/${contactId}`);
};
