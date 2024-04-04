import API from '~/api/core';
import {
  CheckPaymentResponse,
  PaymentRequest,
  PaymentResponse,
  RefundForNotMatchingResponse,
  RefundPaymentResponse,
} from '~/api/types/payment.type';

const requestPayment = async <T = PaymentResponse>(data: PaymentRequest) =>
  API.post<T>('/api/payment/request', data);

const refundPayment = async <T = RefundPaymentResponse>(id: number) =>
  API.post<T>('/api/payment/refund', { id: id });

const refundPaymentFotNotMatching = async <
  T = RefundForNotMatchingResponse,
>() => API.post<T>('/api/payment/refund/match');

const checkPayment = async <T = CheckPaymentResponse>(uid: string) =>
  await API.post<T>('/api/payment/check', { uid: uid });

export default {
  requestPayment,
  refundPayment,
  refundPaymentFotNotMatching,
  checkPayment,
};
