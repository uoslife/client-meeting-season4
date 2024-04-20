import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthAPI } from '~/api';
import toast from 'react-hot-toast';

interface IErrorResponseData {
  code: string;
  message: string;
  status: number;
}

export const API = axios.create({
  withCredentials: true,
  baseURL: 'https://meeting.alpha.uoslife.com/',
});

const handleAuthSilentRefresh = async (originRequest: AxiosError) => {
  if (originRequest.response?.status === 401) {
    await AuthAPI.getRefreshToken()
      .then(res => {
        API.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
        originRequest.config!.headers.Authorization = `Bearer ${res.data.accessToken}`;
        // return toast.error('다시 시도해주세요!', {
        //   duration: 2000,
        // });
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
};

API.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (error: AxiosError) => {
    const { code } = error.response?.data as IErrorResponseData;
    if (code === 'C01') {
      toast.error('이전에 답하지 않은 질문은 없나 확인해주세요!', {
        duration: 2000,
      });
    }
    if (code === 'M02') {
      toast.error(
        '이미 신청을 하신적이 있나요?\n' +
          '아니라면 우측 상단 버튼으로 다시 신청해주세요!',
        {
          icon: '🥲',
          duration: 3500,
        },
      );
    }
    await handleAuthSilentRefresh(error);
    return Promise.reject(error);
  },
);

export default API;
