import { RequestPayParams, RequestPayResponse } from '~/types/payment.type';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PaymentAPI } from '~/api';
import { PaymentResponse } from '~/api/types/payment.type';
import toast, { Toaster } from 'react-hot-toast';
import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';

const ID = import.meta.env.VITE_PORTONE_IMP_ID;

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userPaymentInfo, setUserPaymentInfo] =
    useState<PaymentResponse | null>(null);

  const onClickPaymeny = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP?.init(ID);

    const data: RequestPayParams = {
      pg: 'welcome', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method: 'card', // 결제수단
      merchant_uid: userPaymentInfo?.merchandUid ?? '', // 주문번호
      amount: userPaymentInfo?.price ?? 3000, // 결제금액
      name: '시대팅 Season4 참가비', // 주문명
      buyer_tel: '010-1234-1234', // 구매자 전화번호
      buyer_name: '구매자이름',
      m_redirect_url: 'http://localhost:5173/common/paymentResultStep',
    };

    IMP?.request_pay(data, callback);
  };

  //pc 버전 콜백
  function callback(response: RequestPayResponse) {
    const { error_code, error_msg } = response;
    console.log(response);
    // pc에서 결제도중 취소하는 경우
    if (
      error_code === 'F400' &&
      error_msg === '사용자가 결제를 취소하였습니다'
    ) {
      return toast.success('pc에서 결제를 취소혀셨습니다!', {
        duration: 1500,
      });
    }
    navigate('/common/paymentResultStep', {
      state: response,
    });
  }

  const handlePaymentRequest = async () => {
    const res = await PaymentAPI.requestPayment({
      pg: 'welcome',
      payMethod: 'card',
    });
    setUserPaymentInfo(res.data.data);
  };

  useEffect(() => {
    if (location.state) {
      toast.error('모버일에서 결제를 취소하셨습니다.', {
        icon: '🥲',
        duration: 1800,
      });
    }
    setTimeout(() => {
      handlePaymentRequest();
    }, 2000);
    // TODO: setTimeout 제거
  }, []);

  return (
    <>
      <Col align={'center'} gap={20} padding={'40px 20px'}>
        <Text
          label={'결제하면 신청이 완료돼요!'}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
        <picture>
          <img
            alt={''}
            src={'/images/uoslifeLogo.png'}
            width={255}
            height={140}
          />
        </picture>
        <RoundButton
          status={'inactive'}
          onClick={onClickPaymeny}
          label={'결제하기'}
        />
      </Col>
      <Toaster />
    </>
  );
};

export default PaymentPage;

// 토스트 모달
// ui 작업
