import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
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

export default GroupParticipateStep;
