import API, { API_URL } from '~/api/core';
import {
  CheckPaymentResponse,
  PaymentRequest,
  PaymentResponse,
  RefundForNotMatchingResponse,
  RefundPaymentResponse,
} from '~/api/types/payment.type';

const requestPayment = async <T = PaymentResponse>(data: PaymentRequest) =>
  API.post<T>(`${API_URL.MEETING}/api/payment/request`, data);

const refundPayment = async <T = RefundPaymentResponse>() =>
  API.post<T>(`${API_URL.MEETING}/api/payment/refund`);

const refundPaymentFotNotMatching = async <
  T = RefundForNotMatchingResponse,
>() => API.post<T>(`${API_URL.MEETING}/api/payment/refund/match`);

const checkPayment = async <T = CheckPaymentResponse>(impUid: string) =>
  await API.post<T>(`${API_URL.MEETING}/api/payment/check`, { impUid });

const verifyPayment = async <T = PaymentResponse>() =>
  await API.get<T>(`${API_URL.MEETING}/api/payment/verify`);

export default {
  requestPayment,
  refundPayment,
  refundPaymentFotNotMatching,
  checkPayment,
  verifyPayment,
};
