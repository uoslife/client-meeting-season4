import API, { API_URL } from '~/api/core';
import {
  CreateUoslifeUserRequest,
  CreateUoslifeUserResponse,
  GetRefreshTokenV2,
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

const getRefreshTokenV2 = async <T = VerificationCodeCheckByEmailResponse>(
  data: GetRefreshTokenV2,
) => API.post<T>(`${API_URL.ACCOUNT}/v1/auth/refresh`, data);
const getRefreshTokenV1 = async <T = VerificationCodeCheckByEmailResponse>() =>
  API.post<T>(`${API_URL.MEETING}/api/auth/refresh`);
const signInUosUser = async () =>
  API.post(`${API_URL.MEETING}/api/auth/uos/signUpOrIn`);

const createUoslifeUser = async <T = CreateUoslifeUserResponse>(
  data: CreateUoslifeUserRequest,
) => API.post<T>(`${API_URL.ACCOUNT}/v1/users`, data);

const updateUoslifeUserName = async <T = CreateUoslifeUserResponse>(
  data: CreateUoslifeUserRequest,
) => API.patch<T>(`${API_URL.ACCOUNT}/v1/users/me`, data);

const getUoslifeUserInfo = async <T = GetUoslifeUserInfoResponse>() =>
  API.get<T>(`${API_URL.ACCOUNT}/v1/users/me`);
export default {
  checkVerificationCodeByPhone,
  getVerificationCodeByPhone,
  checkVerificationCodeByEmail,
  getVerificationCodeByEmail,
  getRefreshTokenV1,
  getRefreshTokenV2,
  signInUosUser,
  createUoslifeUser,
  getUoslifeUserInfo,
  updateUoslifeUserName,
};
