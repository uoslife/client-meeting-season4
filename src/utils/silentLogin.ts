import { AuthAPI } from '~/api';
import { AxiosResponse } from 'axios';
import API from '~/api/core';
import { useSetAtom } from 'jotai';
import { isLoggedInAtom } from '~/models/auth';
import toast from 'react-hot-toast';
import uoslifeBridge from '~/bridge';
import { commonDataAtoms } from '~/models/common/data';

export class SilentLogin {
  setIsLoggedIn = useSetAtom(isLoggedInAtom);
  setPageState = useSetAtom(commonDataAtoms.commonUnivVerificationStep.page3);
  JWT_EXPIRY_TIME = 3600 * 1000; // 만료 시간 (1시간 밀리 초로 표현)
  onSilentRefreshV1 = () => {
    AuthAPI.getRefreshTokenV1()
      .then(this.onLoginSuccessV1)
      .catch(() => this.setIsLoggedIn(false));
  };
  onLoginSuccessV1 = (response: AxiosResponse) => {
    const { accessToken } = response.data;
    this.setIsLoggedIn(true);

    API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(this.onSilentRefreshV1, this.JWT_EXPIRY_TIME - 60000);
  };

  onSilentRefreshV2 = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    AuthAPI.getRefreshTokenV2({ refreshToken: refreshToken ?? '' })
      .then(this.onLoginSuccessV2)
      .catch(() => {
        this.setIsLoggedIn(false);
        this.setPageState({
          verified: false,
        });
      });
  };
  onLoginSuccessV2 = (response: AxiosResponse) => {
    const { accessToken, refreshToken } = response.data;
    this.setIsLoggedIn(true);
    localStorage.setItem('refreshToken', refreshToken);

    API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(this.onSilentRefreshV2, this.JWT_EXPIRY_TIME - 60000);
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
