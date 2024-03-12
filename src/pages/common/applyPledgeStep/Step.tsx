import { useAtomValue } from 'jotai';
import FirstPage from './FirstPage';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import { meetingTypeAtom } from '~/store/meeting/common';
import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';

const CommonBranchGatewayStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/branchGatewayStep' },
    prevStep: { path: '/' },
  });
  const meetingType = useAtomValue(meetingTypeAtom);

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
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default CommonBranchGatewayStep;
