import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';
import { groupDataAtoms } from '~/models/group/data';
import { useAtomValue, useSetAtom } from 'jotai';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { navigateNextStepAtom } from '~/models/funnel';
import { isLoggedInAtom } from '~/models/auth';
import { useEffect } from 'react';
import { MeetingAPI } from '~/api';

const PAGE_NUMBER_LIST = [1];
const GroupRoleSelectStep = () => {
  const pageState = useAtomValue(groupDataAtoms.groupRoleSelectStep.page1);
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER_LIST,
    prevStep: { path: '/common/branchGatewayStep' },
    nextStep: {
      path: pageState.isLeader
        ? '/group/leader/myInformationStep'
        : '/group/member/myInformationStep',
    },
  });
  const logInValue = useAtomValue(isLoggedInAtom);
  const resetTeam = async () => {
    await MeetingAPI.deleteMeeting('TRIPLE', true);
  };

  useEffect(() => {
    if (logInValue) resetTeam();
  }, [logInValue]);

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('groupRoleSelectStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header title={'3:3 미팅'} isProgress={false} />
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
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupRoleSelectStep;
