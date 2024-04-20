import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const CommonVerifyForCheckAfterAlreadyAppliedStep = () => {
  const { PageHandler, Funnel, currentPage } = useFunnel({
    pageNumberList: [1, 2],
    prevStep: { path: '/' },
    nextStep: { path: '/common/checkAfterAlreadyAppliedStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보 확인하기" />
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
        totalPage={2}
        onPrev={PageHandler.onPrev}
        onNext={PageHandler.onNext}
      />
    </PageLayout>
  );
};

export default CommonVerifyForCheckAfterAlreadyAppliedStep;
