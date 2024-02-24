import Col from '~/components/layout/Col';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from '~/pages/common/applyPledgeStep/FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const GroupParticipateStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/privacyPolicyStep' },
    prevStep: { path: '/group/myInformationStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'02. 팅 참여하기'}
        isProgress={true}
        totalStep={3}
        currentStep={2}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={1}
        totalPage={1}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupParticipateStep;
