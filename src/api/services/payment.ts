import { ApiResponse, PromiseAxios } from '~/api/types';
import API from '~/api/core';
import {
  CheckPaymentResponse,
  PaymentRequest,
  PaymentResponse,
  RefundForNotMatchingResponse,
  RefundPaymentResponse,
} from '~/api/types/payment.type';

const requestPayment = async <T = PaymentResponse>(
  data: PaymentRequest,
): PromiseAxios<T> => {
  return API.post<ApiResponse<T>>('/api/payment/request', data);
};

const refundPayment = async <T = RefundPaymentResponse>(
  id: number,
): PromiseAxios<T> => {
  return API.post<ApiResponse<T>>('/api/payment/refund', { id: id });
};

const refundPaymentFotNotMatching = async <
  T = RefundForNotMatchingResponse,
>(): PromiseAxios<T> => {
  return API.post<ApiResponse<T>>('/api/payment/refund/match');
};

const checkPayment = async <T = CheckPaymentResponse>(
  uid: string,
): PromiseAxios<T> => {
  return API.post<ApiResponse<T>>('/api/payment/check', { uid: uid });
};

export default {
  requestPayment,
  refundPayment,
  refundPaymentFotNotMatching,
  checkPayment,
};
