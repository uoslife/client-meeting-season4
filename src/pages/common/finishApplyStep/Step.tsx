import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const FinishApplyStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/' },
    prevStep: { path: '/common/checkApplyInfoStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header title={'신청 완료!'} isProgress={false} />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        totalPage={1}
        currentPage={1}
        onPrev={PageHandler.onPrev}
        onNext={PageHandler.onNext}
      />
    </PageLayout>
  );
};

export default FinishApplyStep;
