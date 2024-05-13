import API, { API_URL } from '~/api/core';
import {
  CreateUoslifeUserRequest,
  CreateUoslifeUserResponse,
  GetUoslifeUserInfoResponse,
  GetVerificationCodeByEmailRequest,
  GetVerificationCodeByEmailResponse,
  GetVerificationCodeByPhoneRequest,
  GetVerificationCodeByPhoneResponse,
  VerificationCodeCheckByEmailRequest,
  VerificationCodeCheckByEmailResponse,
  VerificationCodeCheckByPhoneRequest,
  VerificationCodeCheckByPhoneResponse,
} from '~/api/types/auth.type';

const checkVerificationCodeByPhone = async <
  T = VerificationCodeCheckByPhoneResponse,
>(
  data: VerificationCodeCheckByPhoneRequest,
) => API.post<T>(`${API_URL.ACCOUNT}/v1/auth/verify`, data);
const getVerificationCodeByPhone = async <
  T = GetVerificationCodeByPhoneResponse,
>(
  data: GetVerificationCodeByPhoneRequest,
) => API.post<T>(`${API_URL.ACCOUNT}/v1/auth/request`, data);
const checkVerificationCodeByEmail = async <
  T = VerificationCodeCheckByEmailResponse,
>(
  data: VerificationCodeCheckByEmailRequest,
) =>
  API.get<T>(`${API_URL.ACCOUNT}/v1/verification/email/verify`, {
    params: {
      email: data.email,
      code: data.code,
    },
  });
const getVerificationCodeByEmail = async <
  T = GetVerificationCodeByEmailResponse,
>(
  data: GetVerificationCodeByEmailRequest,
) => API.post<T>(`${API_URL.ACCOUNT}/v1/verification/email`, data);

const getRefreshToken = async <T = VerificationCodeCheckByEmailResponse>() =>
  API.post<T>(`${API_URL.MEETING}/api/auth/refresh`);
const signInUosUser = async () =>
  API.post(`${API_URL.MEETING}/api/auth/uos/signUpOrIn`);

const createUoslifeUser = async <T = CreateUoslifeUserResponse>(
  data: CreateUoslifeUserRequest,
) => API.post<T>(`${API_URL.ACCOUNT}/v1/users`, data);

const getUoslifeUserInfo = async <T = GetUoslifeUserInfoResponse>() =>
  API.get<T>(`${API_URL.ACCOUNT}/v1/users/me`);
export default {
  checkVerificationCodeByPhone,
  getVerificationCodeByPhone,
  checkVerificationCodeByEmail,
  getVerificationCodeByEmail,
  getRefreshToken,
  signInUosUser,
  createUoslifeUser,
  getUoslifeUserInfo,
};
