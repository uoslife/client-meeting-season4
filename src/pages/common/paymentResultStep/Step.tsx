import PageLayout from '~/components/layout/page/PageLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SuccessPayment from '~/pages/common/paymentResultStep/SuccessPage';
import FailPayment from '~/pages/common/paymentResultStep/FailPage';
import LoadingPayment from '~/pages/common/paymentResultStep/LoadingPage';
import queryString, { ParsedQuery } from 'query-string';
import { PaymentAPI } from '~/api';
import toast, { Toaster } from 'react-hot-toast';

const CommonPaymentResultStep = () => {
  const navigate = useNavigate();
  // pc에서 결제 결과 navigate state로 주는 경우,
  const { search, state } = useLocation();
  // 모바일에서 결제 결과 query로 주는 경우,
  const { imp_uid, merchant_uid, error_msg, error_code }: ParsedQuery =
    queryString.parse(search);
  // 결제 결과에 따른 화면 렌더링 관리 state
  const [paymentStatus, setPaymentStatus] = useState('loading');

  const handleCheckPaymentResult = async () => {
    const requestImpUid = typeof imp_uid === 'string' ? imp_uid : '';
    const res = await PaymentAPI.checkPayment(requestImpUid);
    setPaymentStatus(res.data.statusCode === 200 ? 'success' : 'fail');
  };

  useEffect(() => {
    // pc 결제 시, 이미 결제된 경우
    if (state.error_msg.includes('이미 승인 완료')) {
      toast.success('이미 승인된 결제입니다!', {
        duration: 2000,
      });
      return setPaymentStatus('success');
    }
    // 모바일에서 결제도중 취소하는 경우
    if (error_msg === '[01] 사용자가 결제를 취소 하였습니다.') {
      return navigate('/common/paymentStep', {
        state: {
          cancelToast: true,
        },
      });
    }
    // TODO:msw로 인한 setTimeout 부착, 실제 api 환경에서는 setTimeout 제거하기
    setTimeout(() => {
      handleCheckPaymentResult();
    }, 2000);
  }, [error_msg, error_code, imp_uid, merchant_uid]);

  const handlePaymentStatus = () => {
    switch (paymentStatus) {
      case 'success':
        return <SuccessPayment />;
      case 'fail':
        return (
          <FailPayment
            errorMessage={typeof error_msg === 'string' ? error_msg : undefined}
          />
        );
      case 'loading':
        return <LoadingPayment />;
      default:
        return <LoadingPayment />;
    }
  };

  return (
    <>
      <PageLayout>
        <PageLayout.Header title={'결제 결과'} isProgress={false} />
        <PageLayout.SingleCardBody cardPadding={'0'}>
          {handlePaymentStatus()}
        </PageLayout.SingleCardBody>
      </PageLayout>
      <Toaster />
    </>
  );
};

export default CommonPaymentResultStep;
