import PageLayout from '~/components/layout/page/PageLayout';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Col from '~/components/layout/Col';
import SuccessPayment from '~/pages/common/paymentResultStep/SuccessPage';
import FailPayment from '~/pages/common/paymentResultStep/FailPage';
import LoadingPayment from '~/pages/common/paymentResultStep/LoadingPage';

type failedPaymentProps1 = {
  errorMessage?: string;
};

const CommonPaymentResultStep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState<
    'success' | 'fail' | 'loading'
  >('loading');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const error_code = searchParams.get('error_code');
    const error_msg = searchParams.get('error_msg');

    if (error_code === 'F400' && error_msg?.includes('이미 승인 완료'))
      return alert('이미 신청되었습니다!');
    if (error_code === 'F400') navigate('/common/paymentStep');
  }, []);
  useEffect(() => {
    console.log(location);
  }, [location]);

  const setSortParams = () => {
    searchParams.set('error_msg', 'clear');
    setSearchParams(searchParams);
    return { errorMessage: searchParams.get('error_msg') ?? '' };
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPaymentStatus('fail');
  //     setSortParams();
  //   }, 3000);
  // }, []);

  const handlePaymentStatus = ({ errorMessage }: failedPaymentProps1) => {
    switch (paymentStatus) {
      case 'success':
        return <SuccessPayment />;
      case 'fail':
        return <FailPayment errorMessage={errorMessage} />;
      case 'loading':
        return <LoadingPayment />;
      default:
        return <LoadingPayment />;
    }
  };

  return (
    <PageLayout>
      <PageLayout.Header title={'결제 결과'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        {handlePaymentStatus(setSortParams()!)}
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonPaymentResultStep;
