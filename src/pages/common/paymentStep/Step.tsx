import PageLayout from '~/components/layout/page/PageLayout';
import PaymentPage from '~/pages/common/paymentStep/PaymentPage';
import { useFunnel } from '~/hooks/useFunnel';
import { useSetAtom } from 'jotai';
import { navigateNextStepAtom } from '~/models/funnel';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';

const PAGE_NUMBER = [1];

const CommonPaymentStep = () => {
  const { Funnel } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: { path: '/common/paymentStep' },
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBackPersonal = useStepToGoBack('personalPledgeStep');
  const stepToGoBackGroup = useStepToGoBack('groupLeaderPledgeStep');
  const stepToGoBack = stepToGoBackPersonal && stepToGoBackGroup;
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }
  return (
    <PageLayout>
      <PageLayout.Header title={'결제 하기'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding={'0'}>
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
