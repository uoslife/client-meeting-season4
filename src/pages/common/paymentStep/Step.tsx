import PageLayout from '~/components/layout/page/PageLayout';
import Col from '~/components/layout/Col';
import PaymentPage from '~/pages/common/paymentStep/PaymentPage';

const PaymentStep = () => {
  return (
    <PageLayout>
      <PageLayout.Header
        title={'경희대 한국외대 구성원 인증'}
        isProgress={false}
      />
      <PageLayout.SingleCardBody>
        <Col align={'center'} padding={'36px'}>
          <PaymentPage />
        </Col>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default PaymentStep;
