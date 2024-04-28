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

const refundPayment = async <T = RefundPaymentResponse>(phoneNumber: number) =>
  API.post<T>('/api/payment/refund', { phoneNumber });

const refundPaymentFotNotMatching = async <
  T = RefundForNotMatchingResponse,
>() => API.post<T>('/api/payment/refund/match');

const checkPayment = async <T = CheckPaymentResponse>(impUid: string) =>
  await API.post<T>('/api/payment/check', { impUid });

const verifyPayment = async <T = PaymentResponse>() =>
  await API.get<T>('/api/payment/verify');

export default {
  requestPayment,
  refundPayment,
  refundPaymentFotNotMatching,
  checkPayment,
  verifyPayment,
};
