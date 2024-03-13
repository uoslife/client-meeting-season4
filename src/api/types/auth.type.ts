export type GetVerificationCodeRequest = {
  email: string;
  university: string;
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
