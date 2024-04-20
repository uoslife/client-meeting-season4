import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';
import { MeetingAPI } from '~/api';
import { useAtomValue, useSetAtom } from 'jotai';
import { groupDataAtoms } from '~/models/group/data';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { navigateNextStepAtom } from '~/models/funnel';

const GroupLeaderPreferStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    prevStep: { path: '/group/leader/groupInformationStep' },
    nextStep: { path: '/group/leader/pledgeStep' },
  });

  const groupLeaderPreferValue = useAtomValue(
    groupDataAtoms.groupLeaderPreferStep.page1,
  );

  const { ageRange, atmosphere, univs } = groupLeaderPreferValue;

  let mood: 'ACTIVE' | 'CALM' | 'NOT_MATTER';
  if (atmosphere === '활발한 편') mood = 'ACTIVE';
  else if (atmosphere === '차분한 편') mood = 'CALM';
  else mood = 'NOT_MATTER';

  const updatePrefer = async () => {
    await MeetingAPI.updatePrefer('TRIPLE', true, {
      ageMin: ageRange[0],
      ageMax: ageRange[1],
      university: univs,
      mood: mood,
    });
  };

  const onNext = async () => {
    await updatePrefer();
    PageHandler.onNext();
  };

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('groupLeaderPreferStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'04. 만나고 싶은 팅 정보 입력하기'}
        isProgress={true}
        totalStep={7}
        currentStep={4}
      />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={1}
        onNext={onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupLeaderPreferStep;
