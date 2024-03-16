import { RequestPayParams, RequestPayResponse } from '~/types/payment.type';
import { useNavigate } from 'react-router-dom';
import Text from '~/components/typography/Text';

const ID = 'imp04325748';
const NICE_PAYMENT_PG = 'nice_v2.nictest00m';
const NAVERPAY = 'naverpay';
const KAKAOPAY = 'kakaopay';
const TOSSPAYMENTS = 'tosspayments';

const PaymentPage = () => {
  const navigate = useNavigate();

  const onClickPaymeny = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP?.init(ID);

    const data: RequestPayParams = {
      pg: NICE_PAYMENT_PG, // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method: 'card', // 결제수단
      merchant_uid: 'test_uoslife_meeting_0020', // 주문번호
      amount: 100, // 결제금액
      name: '아임포트 결제 데이터 분석', // 주문명
      buyer_tel: '010-1234-1234', // 구매자 전화번호
      vbank_due: '2024-12-31',
      escrow: false,
      period: {
        from: '20240306',
        to: '20240320',
      },
      m_redirect_url: 'http://localhost:5173/common/paymentResultStep',
    };

    IMP?.request_pay(data, callback);
  };

  //pc 버전 콜백
  function callback(response: RequestPayResponse) {
    const { error_code, error_msg } = response;
    console.log(response);
    if (error_code === 'F400' && error_msg?.includes('이미 승인 완료'))
      alert('이미 승인 신청 완료했습니다.');
    if (error_code === 'F400') return;
    // navigate('/common/paymentResultStep', {
    //   state: response,
    // });
  }

  return <div onClick={onClickPaymeny}>결제하기</div>;
};

export default PaymentPage;
