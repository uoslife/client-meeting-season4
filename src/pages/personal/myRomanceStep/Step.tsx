import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useAtomValue, useSetAtom } from 'jotai';
import { personalDataAtoms } from '~/models/personal/data';
import { MeetingAPI } from '~/api';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { navigateNextStepAtom } from '~/models/funnel';

const useApi = () => {
  const { answer: a1 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page1,
  );
  const { answer: a2 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page2,
  );
  const { answer: a3 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page3,
  );
  const { answer: a4 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page4,
  );
  const { answer: a5 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page5,
  );

  const body = { questions: [a1!, a2!, a3!, a4!, a5!] };

  const updateInfo = () => MeetingAPI.updateInfo('SINGLE', true, body);

  return { updateInfo };
};

const PAGE_NUMBER = [1, 2, 3, 4, 5];

const PersonalMyRomanceStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/personal/myInformationStep' },
    nextStep: { path: '/personal/myPreferTypeStep' },
  });
  const { updateInfo } = useApi();

  const onNext = async () => {
    // if (currentPage === 5) {
    //   await updateInfo();
    // }
    // TODO:포트원 심사를 위한 api 임시 주석 처리

    PageHandler.onNext();
  };

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('personalMyRomanceStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'02. 나의 연애 스타일 알아보기'}
        isProgress={true}
        currentStep={2}
        totalStep={6}
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
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onNext={onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default PersonalMyRomanceStep;
