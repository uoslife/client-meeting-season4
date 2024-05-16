import PageLayout from '~/components/layout/page/PageLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SuccessPayment from '~/pages/common/paymentResultStep/SuccessPage';
import FailPayment from '~/pages/common/paymentResultStep/FailPage';
import LoadingPayment from '~/pages/common/paymentResultStep/LoadingPage';
import toast from 'react-hot-toast';
import querystring from 'query-string';
import { PaymentAPI } from '~/api';
import { useSetAtom } from 'jotai';
import { isPaymentFinishedAtom } from '~/models/payment';
import { useAtomValue } from 'jotai';
import { isLoggedInAtom } from '~/models/auth';
import { isUseFramerMotionAtom } from '~/models/common/data';

const CommonPaymentResultStep = () => {
  const navigate = useNavigate();
  // pc에서 결제 결과 navigate state로 주는 경우,
  const { state: locationState, search: locationSearch } = useLocation();
  // 모바일에서 결제 결과 query로 주는 경우,
  const query = querystring.parse(locationSearch);
  // 결제 결과에 따른 화면 렌더링 관리 state
  const [paymentStatus, setPaymentStatus] = useState('loading');
  const paymentResultValue = locationState ? locationState : query;
  const logInValue = useAtomValue(isLoggedInAtom);
  const setIsPaymentFinishedAtom = useSetAtom(isPaymentFinishedAtom);
  const setIsUseFramerMotion = useSetAtom(isUseFramerMotionAtom);

  const handleCheckPaymentResult = async () => {
    setTimeout(async () => {
      await PaymentAPI.checkPayment(paymentResultValue.imp_uid as string)
        .then(() =>
          setTimeout(() => {
            console.log('성공');
            setPaymentStatus('success');
            setIsPaymentFinishedAtom(true);
            setIsUseFramerMotion(true);
          }, 1500),
        )
        .catch(error => {
          if (error.response?.data.code === 'T01') {
            console.log('nn');
          }
          setPaymentStatus('fail');
        });
    }, 1000);
  };

  useEffect(() => {
    setIsUseFramerMotion(false);

    // pc에서 결제가 이미 승인된 경우
    if (locationState?.error_msg?.includes('이미 승인 완료')) {
      toast.success('이미 승인된 결제입니다!', {
        duration: 2000,
      });
      return setPaymentStatus('success');
    }
    // 모바일에서 결제도중 취소하는 경우
    if (query?.error_msg === '[01] 사용자가 결제를 취소 하였습니다.') {
      return navigate('/common/paymentStep', {
        state: {
          cancelToast: true,
        },
      });
    }
    // 모바일에서 결제도중 취소 이외의 error인 경우
    if (query?.error_code === 'F400') {
      setPaymentStatus('fail');
      return;
    }

    if (logInValue) handleCheckPaymentResult();
  }, [paymentResultValue, logInValue]);

  const handlePaymentStatus = () => {
    switch (paymentStatus) {
      case 'success':
        return <SuccessPayment />;
      case 'fail':
        return <FailPayment errorMessage={paymentResultValue.error_msg} />;
      case 'loading':
        return <LoadingPayment />;
      default:
        return <LoadingPayment />;
    }
  };

  return (
    <>
      <PageLayout>
        <PageLayout.Header
          title={'결제 결과'}
          isProgress={false}
          showErrorButton={false}
        />
        <PageLayout.SingleCardBody cardPadding={'0'}>
          {handlePaymentStatus()}
        </PageLayout.SingleCardBody>
      </PageLayout>
    </>
  );
};

export default CommonPaymentResultStep;
