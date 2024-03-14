import axios, { AxiosError } from 'axios';
import { AuthAPI } from '~/api';

const API = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5173/',
});

API.interceptors.request.use(
  res => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return res;

    res.headers.Authorization = `Bearer ${accessToken}`;
    return res;
  },
  (error: AxiosError) => {
    const statusCode = error.response?.status;
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  res => {
    return res;
  },
  async (error: AxiosError) => {
    const originRequest = error;
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      const res = await AuthAPI.getRefreshToken(refreshToken!);
      localStorage.setItem('accessToken', res.data.data.accessToken);
      localStorage.setItem('refreshToken', res.data.data.refreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.data.accessToken}`;
      originRequest.config!.headers.Authorization = `Bearer ${res.data.data.accessToken}`;
      return axios(originRequest.config!);
    }

    // res.headers.Authorization = `Bearer ${accessToken}`;
  },
);

export default API;
