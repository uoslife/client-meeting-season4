import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthAPI } from '~/api';
import toast from 'react-hot-toast';

export const API = axios.create({
  withCredentials: true,
  baseURL: 'https://meeting.alpha.uoslife.com/',
});

API.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (error: AxiosError & { config: { retryCount: number } }) => {
    const originRequest = error;
    const statusCode = originRequest.response?.status;
    if (statusCode === 401) {
      await AuthAPI.getRefreshToken()
        .then(res => {
          API.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
          originRequest.config!.headers.Authorization = `Bearer ${res.data.accessToken}`;
          return axios(originRequest.config!);
        })
        .catch(() => {
          toast.error('다시 로그인해주세요!', {
            duration: 2000,
          });
          setTimeout(
            () => (window.location.href = '/common/univVerificationStep'),
            1500,
          );
        });
    }

    return Promise.reject(error);
  },
);

export default API;
