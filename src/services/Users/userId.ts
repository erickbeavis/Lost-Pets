import axios from 'axios';

type RequesConfig = {
  method: string;
  url: string;
  data?: object;
};

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

export const userId = async (id: string, method: string, body?: RequestBody) => {
  try {
    const config: RequesConfig = {
      method,
      url: `/user/${id}`,
    };

    if (body) config.data = body;

    const { data } = await axios(config);

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};
