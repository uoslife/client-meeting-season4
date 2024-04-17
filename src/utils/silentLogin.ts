import { AuthAPI } from '~/api';
import { AxiosResponse } from 'axios';
import API from '~/api/core';
import { useSetAtom } from 'jotai';
import { isLoggedInAtom } from '~/models/auth';

export class SilentLogin {
  setIsLoggedIn = useSetAtom(isLoggedInAtom);
  JWT_EXPIRY_TIME = 3600 * 1000; // 만료 시간 (1시간 밀리 초로 표현)
  onSilentRefresh = () => {
    AuthAPI.getRefreshToken().then(this.onLoginSuccess);
  };

  onLoginSuccess = (response: AxiosResponse) => {
    const { accessToken } = response.data;
    this.setIsLoggedIn(true);

    API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(this.onSilentRefresh, this.JWT_EXPIRY_TIME - 60000);
  };
}
