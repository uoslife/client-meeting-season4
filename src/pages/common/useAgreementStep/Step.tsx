import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';
import { useAtomValue } from 'jotai';
import { groupApplyAtoms, meetingTypeAtom } from '~/store/meeting';

const UseAgreementStep = () => {
  const meetingType = useAtomValue(meetingTypeAtom);
  const isLeader = useAtomValue(groupApplyAtoms.groupRole_isLeader);

  let headerTitle = '04. 시대팅 이용 서약';
  if (meetingType === 'group') {
    headerTitle = isLeader ? '05. 시대팅 이용 서약' : '03. 시대팅 이용 서약';
  }

  let prevStepPath;
  if (meetingType !== 'group') {
    prevStepPath = '/personal/myPreferTypeStep';
  } else if (isLeader) {
    prevStepPath = '/group/groupPreferStep';
  } else {
    prevStepPath = '/group/groupParticipateStep';
  }

  let nextStepPath;
  if (meetingType === 'group' && !isLeader) {
    nextStepPath = '/group/teamMemberFinishApplyStep';
  } else {
    nextStepPath = '/common/checkApplyInfoStep';
  }

  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: nextStepPath },
    prevStep: { path: prevStepPath },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={headerTitle}
        isProgress={true}
        totalStep={1}
        currentStep={1}
      />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
        </Funnel>
        <PageLayout.Footer
          currentPage={currentPage}
          totalPage={1}
          onNext={PageHandler.onNext}
          onPrev={PageHandler.onPrev}
        />
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default UseAgreementStep;
