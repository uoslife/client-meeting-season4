export type PaymentRequest = {
  pg: 'WELCOME_PAYMENTS';
  payMethod: 'card';
};

export type PaymentResponse = {
  merchantUid: string;
  price: number;
  phoneNumber: string;
  name: string;
  productName: string;
};

export type RefundPaymentResponse = {
  cancelSuccess: boolean;
  message: string;
};

export type RefundForNotMatchingResponse = {
  successCount: number;
  failedCount: number;
  refundList: RefundPaymentResponse;
};

export type CheckPaymentResponse = {
  paymentSuccess: boolean;
  message: string;
};
