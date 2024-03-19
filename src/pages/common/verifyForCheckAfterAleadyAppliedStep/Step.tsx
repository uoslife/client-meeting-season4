import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';

const CommonVerifyForCheckAfterAleadyAppliedStep = () => {
  const { PageHandler } = useFunnel({
    prevStep: { path: '/common/finishApplyStep' },
    nextStep: { path: '/common/checkAfterAleadyAppliedStep' },
    pageNumberList: [1],
  });

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보 확인하기" />
      <PageLayout.SingleCardBody>
        <FirstPage />
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={1}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
        totalPage={1}
      />
    </PageLayout>
  );
};

export default CommonVerifyForCheckAfterAleadyAppliedStep;
