import axios from 'axios';

const getInstanceApi = (url?: string) => {
  if (!url) {
    throw new Error('Backend api not specified');
  }

  const api = axios.create({
    baseURL: url,
  });

  return api;
};

export const api = getInstanceApi('https://paveltrety.ru/api');
// export const api = getInstanceApi('http://localhost:5002/api');
