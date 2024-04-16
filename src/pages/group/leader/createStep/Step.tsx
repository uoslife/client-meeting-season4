import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { useSetAtom } from 'jotai';
import { navigateNextStepAtom } from '~/models/funnel';

const PAGE_NUMBER = [1, 2];

const GroupLeaderCreateStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/group/leader/myInformationStep' },
    nextStep: { path: '/group/leader/groupInformationStep' },
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('groupLeaderGroupCreateStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'02. 팅 만들기'}
        isProgress={true}
        currentStep={2}
        totalStep={7}
      />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={2}>
            <SecondPage />
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

export default GroupLeaderCreateStep;
