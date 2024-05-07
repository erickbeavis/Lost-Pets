import axios from 'axios';

type RequestBody = {
  type: number; // 0 - Email | 1 - Phone | 2 - WPP | 3 - URL
  contact: string;
};

export const createContact = async (body: RequestBody) => {
  try {
    const { data } = await axios.post('/contact', {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const updateContact = async (contactId: string, body: RequestBody) => {
  try {
    const { data } = await axios.put(`/contact/${contactId}`, {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const deleteContact = async (contactId: string) => {
  try {
    return await axios.delete(`/contact/${contactId}`);
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};
