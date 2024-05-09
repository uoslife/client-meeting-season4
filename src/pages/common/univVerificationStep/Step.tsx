import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { useAtomValue, useSetAtom } from 'jotai';
import { isPaymentFinishedAtom } from '~/models/payment';
import { navigateNextStepAtom } from '~/models/funnel';
import { useState } from 'react';

const REGISTER_PAGE_NUMBER = [1, 2, 3, 4];
const LOGIN_PAGE_NUMBER = [1, 2];

const CommonUnivVerificationStep = () => {
  const [isRegisteredUoslife, setIsRegisteredUoslife] = useState(true);
  const isPaymentFinishedValue = useAtomValue(isPaymentFinishedAtom);
  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('commonUnivVerificationStep');
  const navigate = useTypeSafeNavigate();
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: isRegisteredUoslife
      ? REGISTER_PAGE_NUMBER
      : LOGIN_PAGE_NUMBER,
    nextStep: {
      path: isPaymentFinishedValue
        ? '/common/checkAfterAlreadyAppliedStep'
        : '/common/branchGatewayStep',
    },
    prevStep: { path: '/' },
  });

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
            <SecondPage setIsRegisteredUoslife={setIsRegisteredUoslife} />
          </Funnel.Page>
          <Funnel.Page pageNumber={3}>
            <ThirdPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={4}>
            <ForthPage />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={
          isRegisteredUoslife
            ? REGISTER_PAGE_NUMBER.length
            : LOGIN_PAGE_NUMBER.length
        }
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default CommonUnivVerificationStep;
