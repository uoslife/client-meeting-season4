import { useAtomValue } from 'jotai';
import FirstPage from './FirstPage';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import { meetingTypeAtom } from '~/store/meeting/common';
import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';

const BranchGatewayStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/branchGateWayStep' },
    prevStep: { path: '/' },
  });
  const isPageFinished = useAtomValue(pageFinishAtom);
  const meetingType = useAtomValue(meetingTypeAtom);
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageLayout.Header
        title={'04. 시대팅 이용 서약'}
        isProgress={true}
        totalStep={meetingType === 'personal' ? 1 : 2}
        currentStep={1}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={1}
        isAbled={isPageFinished}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default BranchGatewayStep;
