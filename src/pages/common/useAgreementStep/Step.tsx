import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const UseAgreementStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    // TODO: 상황에 따른 라우팅 분기처리
    nextStep: { path: '/common/checkApplyInfoStep' },
    prevStep: { path: '/common/checkApplyInfoStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'05. 시대팅 이용 서약'} //TODO: 상황에 따른 title 분기처리
        isProgress={true}
        totalStep={1}
        currentStep={1}
      />
      <PageLayout.SingleCardBody>
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
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default UseAgreementStep;
