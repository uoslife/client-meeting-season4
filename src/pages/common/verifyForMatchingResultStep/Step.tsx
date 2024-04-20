import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const PAGE_NUMBER = [1, 2];

const CommonVerifyForMatchingResultStep = () => {
  const { Funnel, PageHandler, currentPage } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/' },
    nextStep: { path: '/' }, // TODO: 시대팅 안내 사항 보러가기 페이지로 수정
  });

  return (
    <PageLayout>
      <PageLayout.Header title={'매칭 결과 확인하기'} />
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

export default CommonVerifyForMatchingResultStep;
