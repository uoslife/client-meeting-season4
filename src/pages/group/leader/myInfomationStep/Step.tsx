import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { useSetAtom } from 'jotai';
import { navigateNextStepAtom } from '~/models/funnel';

const PAGE_NUMBER = [1, 2];

const GroupLeaderMyInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/group/roleSelectStep' },
    nextStep: { path: '/group/leader/createStep' },
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('groupLeaderMyInformationStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'01. 나의 정보 입력하기'}
        isProgress={true}
        currentStep={1}
        totalStep={7}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={2}>
          <SecondPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupLeaderMyInformationStep;
