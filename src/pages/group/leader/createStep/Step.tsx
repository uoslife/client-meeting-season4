import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useAtomValue, useSetAtom } from 'jotai';
import { groupDataAtoms } from '~/models/group/data';
import { MeetingAPI } from '~/api';

const useApi = () => {
  const { teamName: name } = useAtomValue(
    groupDataAtoms.groupLeaderGroupCreateStep.page1,
  );

  const createTeam = async () => {
    const res = await MeetingAPI.createMeeting('TRIPLE', true, name);
    return res;
  };
  return { createTeam };
};

const PAGE_NUMBER = [1, 2];

const GroupLeaderCreateStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/group/leader/myInformationStep' },
    nextStep: { path: '/group/leader/groupInformationStep' },
  });

  const setPageState = useSetAtom(
    groupDataAtoms.groupLeaderGroupCreateStep.page2,
  );

  const { createTeam } = useApi();

  const onNext = async () => {
    if (currentPage === 1) {
      const res = await createTeam();
      const joinCode = res.data.code;
      if (joinCode) {
        setPageState(prev => ({ ...prev, joinCode: joinCode }));
      }
    }
    PageHandler.onNext();
  };

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
        onNext={onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupLeaderCreateStep;
