import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import PageLayout from '~/components/layout/page/PageLayout';

const PAGE_NUMBER = [1, 2];

const GroupCreateStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/common/privacyPolicy' },
    prevStep: { path: '/group/myInformationStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'02. 팅 만들기'}
        isProgress={true}
        currentStep={2}
        totalStep={7}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={2}>
          <SecondPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupCreateStep;
