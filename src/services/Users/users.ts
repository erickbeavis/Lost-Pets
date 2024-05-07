import axios from 'axios';

import { UserRequestBody } from '~/types/userTypes';

type RequestConfig = {
  method: string;
  url: string;
  data?: object;
};

export const createUser = async (body: UserRequestBody) => {
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

export const loginUser = async (username: string, password: string) => {
  try {
    const { data } = await axios.get(`/user/login/${username}/${password}`);

    if (!data) return;

    return data;
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const logoutUser = async () => {
  try {
    return await axios.get('/user/logout');
  } catch (err) {
    throw new Error(`Error ${err}`);
  }
};

export const userId = async (id: string, method: string, body?: UserRequestBody) => {
  try {
    const config: RequestConfig = {
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
