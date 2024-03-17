import PageLayout from '~/components/layout/page/PageLayout';
import PaymentPage from '~/pages/common/paymentStep/PaymentPage';
import { useFunnel } from '~/hooks/useFunnel';

const CommonPaymentStep = () => {
  const { Funnel } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: { path: '/common/paymentStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'경희대 한국외대 구성원 인증'}
        isProgress={false}
      />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <PaymentPage />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonPaymentStep;
