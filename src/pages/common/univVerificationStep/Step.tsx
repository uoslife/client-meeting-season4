import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { useAtomValue, useSetAtom } from 'jotai';
import { isPaymentFinishedAtom } from '~/models/payment';
import { navigateNextStepAtom } from '~/models/funnel';

const PAGE_NUMBER = [1, 2, 3];

const CommonUnivVerificationStep = () => {
  const isPaymentFinishedValue = useAtomValue(isPaymentFinishedAtom);
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: {
      path: isPaymentFinishedValue
        ? '/common/checkAfterAlreadyAppliedStep'
        : '/common/branchGatewayStep',
    },
    prevStep: { path: '/' },
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('commonUnivVerificationStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'경희대 한국외대 구성원 인증'}
        isProgress={false}
        showErrorButton={false}
      />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={2}>
            <SecondPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={3}>
            <ThirdPage />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default CommonUnivVerificationStep;
