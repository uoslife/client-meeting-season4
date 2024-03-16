export type GetVerificationCodeRequest = {
  email: string;
  university: 'KHU' | 'HUFS' | 'UOS' | null;
};
export type GetVerificationCodeResponse = {
  result: boolean;
};
export type VerificationCodeCheckRequest = {
  code: string;
} & GetVerificationCodeRequest;

export type VerificationCodeCheckResponse = {
  accessToken: string;
  refreshToken: string;
};
