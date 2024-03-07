import PageLayout from '~/components/layout/page/PageLayout';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Col from '~/components/layout/Col';
import SuccessPayment from '~/pages/common/paymentResultStep/SuccessPage';
import FailPayment from '~/pages/common/paymentResultStep/FailPage';
import LoadingPayment from '~/pages/common/paymentResultStep/LoadingPage';

const PaymentResultStep = () => {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState<
    'success' | 'fail' | 'loading'
  >('loading');
  const [searchParams, setSearchParams] = useSearchParams();
  const error_code = searchParams.get('error_code');
  const error_msg = searchParams.get('error_msg');
  const imp_uid = searchParams.get('imp_uid');
  const merchant_uid = searchParams.get('merchant_uid');

  useEffect(() => {
    if (error_code === 'F400') navigate('/common/paymentStep');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPaymentStatus('success');
    }, 5000);
  }, []);

  const handlePaymentStatus = () => {
    switch (paymentStatus) {
      case 'success':
        return <SuccessPayment />;
      case 'fail':
        return <FailPayment />;
      case 'loading':
        return <LoadingPayment />;
      default:
        return <LoadingPayment />;
    }
  };

  return (
    <PageLayout>
      <PageLayout.Header title={'결제 결과'} isProgress={false} />
      <PageLayout.SingleCardBody>
        {handlePaymentStatus()}
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default PaymentResultStep;
