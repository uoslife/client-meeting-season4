import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from '~/pages/common/applyPledgeStep/FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const GroupPreferStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/group/groupInformationStep' },
    prevStep: { path: '/common/privacyPolicyStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'04. 만나고 싶은 팅 정보 입력하기'}
        isProgress={true}
        totalStep={7}
        currentStep={4}
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

export default GroupPreferStep;
