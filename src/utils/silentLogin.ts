import { AuthAPI } from '~/api';
import { AxiosResponse } from 'axios';
import API from '~/api/core';

export class SilentLogin {
  JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
  // JWT_EXPIRY_TIME = 5000; // 만료 시간 (24시간 밀리 초로 표현)
  onSilentRefresh = () => {
    AuthAPI.getRefreshToken().then(this.onLoginSuccess);
  };

  onLoginSuccess = (response: AxiosResponse) => {
    const { accessToken } = response.data;

    API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(this.onSilentRefresh, this.JWT_EXPIRY_TIME);
  };
}
