import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useAtomValue, useSetAtom } from 'jotai';
import { groupDataAtoms } from '~/models/group/data';
import { MeetingAPI } from '~/api';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

const useApi = () => {
  const { teamName: name } = useAtomValue(
    groupDataAtoms.groupLeaderGroupCreateStep.page1,
  );

  const createTeam = () => MeetingAPI.createMeeting('TRIPLE', true, name);

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
    // 팅 만들기
    if (currentPage === 1) {
      try {
        const res = await createTeam();
        setPageState(prev => ({ ...prev, joinCode: res.data.code }));
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.data.code) {
          toast.success('이미 팅을 만드셨어요!');
        }
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
        onPrev={onPrev}
      />
    </PageLayout>
  );
};

export default GroupLeaderCreateStep;
