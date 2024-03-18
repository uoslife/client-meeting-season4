export type PaymentRequest = {
  pg: 'welcome';
  payMethod: 'card';
};

export type PaymentResponse = {
  merchantUid: string;
  price: number;
  phoneNumber: string;
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
