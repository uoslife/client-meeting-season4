import { AuthAPI } from '~/api';
import { AxiosResponse } from 'axios';
import API from '~/api/core';
import { useSetAtom } from 'jotai';
import { isLoggedInAtom } from '~/models/auth';
import toast from 'react-hot-toast';
import uoslifeBridge from '~/bridge';

export class SilentLogin {
  setIsLoggedIn = useSetAtom(isLoggedInAtom);
  JWT_EXPIRY_TIME = 3600 * 1000; // 만료 시간 (1시간 밀리 초로 표현)
  onSilentRefresh = () => {
    AuthAPI.getRefreshToken()
      .then(this.onLoginSuccess)
      .catch(() => this.setIsLoggedIn(false));
  };

  onLoginSuccess = (response: AxiosResponse) => {
    const { accessToken } = response.data;
    this.setIsLoggedIn(true);

    API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(this.onSilentRefresh, this.JWT_EXPIRY_TIME - 60000);
  };

  reLoginForUosUser = () => {
    toast.success('원활한 진행을 위해 다시 재접속 해주세요!', {
      duration: 4000,
    });
    this.setIsLoggedIn(false);
    setTimeout(() => {
      uoslifeBridge.goBack();
    }, 4000);
  };
}
