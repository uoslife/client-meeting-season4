import { PromiseAxios } from '~/api/types';
import API from '~/api/core';
import type {
  GetVerificationCodeRequest,
  GetVerificationCodeResponse,
  VerificationCodeCheckRequest,
  VerificationCodeCheckResponse,
} from '~/api/types/auth.type';

const checkVerificationCode = async <T = VerificationCodeCheckResponse>(
  data: VerificationCodeCheckRequest,
): PromiseAxios<T> => {
  return API.post<T>('/api/verification/verify', data);
};

const getVerificationCode = async <T = GetVerificationCodeResponse>(
  data: GetVerificationCodeRequest,
): PromiseAxios<T> => {
  return API.post<T>('/api/verification/send', data);
};

const getRefreshToken = async <T = VerificationCodeCheckResponse>(
  data: string,
): PromiseAxios<T> => {
  return API.post<T>('/api/refreshToken', data);
};
export default { checkVerificationCode, getVerificationCode, getRefreshToken };
