import axios from 'axios';

type RequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contacts: [
    {
      type: number;
      contact: string;
    },
  ];
};

export const createUser = async (body: RequestBody) => {
  try {
    const { data } = await axios.post('/user', {
      body,
    });

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};
