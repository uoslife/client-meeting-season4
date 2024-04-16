import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import PageLayout from '~/components/layout/page/PageLayout';
import SixthPage from './SixthPage';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { navigateNextStepAtom } from '~/models/funnel';
import { useSetAtom } from 'jotai';

const PAGE_NUMBER = [1, 2, 3, 4, 5, 6];

const GroupLeaderGroupInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/group/leader/createStep' },
    nextStep: { path: '/group/leader/preferStep' },
    // 기획에게 뒤로 가기 시, 팅 참여 항목으로 다시 돌아가게끔 할 것인지 물어보기
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('groupLeaderGroupInformationStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'03. 우리 팅 정보 입력하기'}
        isProgress={true}
        currentStep={3}
        totalStep={7}
      />
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
        <Funnel.Page pageNumber={4}>
          <ForthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={5}>
          <FifthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={6}>
          <SixthPage />
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

export default GroupLeaderGroupInformationStep;
