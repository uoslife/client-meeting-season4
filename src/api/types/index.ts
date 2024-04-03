import { AxiosResponse } from 'axios';

export type ApiResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export type PromiseAxios<T> = Promise<AxiosResponse<T>>;
// export type PromiseAxios<T> = Promise<AxiosResponse<T>>;
