export type PaymentRequest = {
  pg: 'kakaopay' | 'tosspayments';
  payMethod: 'card';
};

export type PaymentResponse = {
  merchandUid: string;
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
