export type GetVerificationCodeByPhoneRequest = {
  phoneNumber: string;
};

export type GetVerificationCodeByEmailRequest = {
  email: string;
};
export type GetVerificationCodeByEmailResponse = {
  result: boolean;
};
export type GetVerificationCodeByPhoneResponse = {
  expiresAt: string;
  effectiveSeconds: number;
};
export type VerificationCodeCheckByEmailRequest = {
  email: string;
  code: string;
};

export type VerificationCodeCheckByPhoneRequest = {
  phoneNumber: string;
  code: string;
};

export type VerificationCodeCheckByEmailResponse = {
  accessToken: string;
  refreshToken: string;
  reason: AuthSuccessReasonType;
};

export type VerificationCodeCheckByPhoneResponse = {
  accessToken: string;
  refreshToken?: string;
  reason: AuthSuccessReasonType;
};

export type CreateUoslifeUserRequest = {
  nickname: string;
};

export type CreateUoslifeUserResponse =
  Required<VerificationCodeCheckByPhoneResponse>;

export type GetUoslifeUserInfoResponse = {
  id: number;
  nickname: string;
  phone: string;
  name: string;
  email: string;
  realm: {
    code: string;
    name: string;
  };
  identity: {
    id: string;
    type: string;
    status: string;
    idNumber: string;
    university: string;
    department: string;
    major: string;
  };
  moderator: {
    generation: string;
    chapter: string;
    role: string;
  };
  isLinkedPortal: boolean;
  isVerified: boolean;
  verificationMethod: string;
};

export type GetRefreshTokenV2 = {
  refreshToken: string;
};

export type AuthSuccessReasonType =
  | 'logged_in' // 로그인 완료
  | 'registering' // 회원가입 필요
  | 'registered' // 회원가입 완료
  | 'refreshed'; // 토큰 재발급 완료
