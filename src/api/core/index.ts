import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthAPI } from '~/api';
import toast from 'react-hot-toast';

interface IErrorResponseData {
  code: string;
  message: string;
  status: number;
}

export const API_URL = {
  ACCOUNT: 'https://account.uoslife.com',
  MEETING: 'https://meeting.uoslife.com',
};

export const API = axios.create({
  withCredentials: true,
});
const handleAuthSilentRefresh = async (originRequest: AxiosError) => {
  //@ts-expect-error: window has ReactNativeWebview
  const isFromUoslifeWebView = !!window.ReactNativeWebView;

  if (!isFromUoslifeWebView && originRequest.response?.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    await AuthAPI.getRefreshTokenV2({ refreshToken: refreshToken ?? '' })
      .then(res => {
        API.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
        localStorage.setItem('refreshToken', res.data.refreshToken);
        originRequest.config!.headers.Authorization = `Bearer ${res.data.accessToken}`;
        // return toast.error('다시 시도해주세요!', {
        //   duration: 2000,
        // });
        return axios(originRequest.config!);
      })
      .catch(() => {
        toast.error('다시 로그인해주세요!', {
          duration: 4000,
        });

        setTimeout(() => {
          window.location.href = '/common/univVerificationStep';
        }, 1500);
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
    if (error.response?.status === 500) {
      toast.error(
        '일시적인 오류로 신청을 진행할 수 없습니다.\n' +
          '시대생 카카오톡 채널로 문의해주세요.',
        {
          icon: '🥲',
          duration: 7000,
        },
      );
      return;
    }
    await handleAuthSilentRefresh(error);
    return Promise.reject(error);
  },
);

export default API;
