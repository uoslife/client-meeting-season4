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
  reason: string;
};

export type VerificationCodeCheckByPhoneResponse = {
  accessToken: string;
  refreshToken: string;
  reason: string;
};

export type CreateUoslifeUserRequest = {
  nickname: string;
};

export type CreateUoslifeUserResponse = VerificationCodeCheckByPhoneResponse;

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
