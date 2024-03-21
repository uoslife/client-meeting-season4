import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const CommonVerifyForCheckAfterAlreadyAppliedStep = () => {
  const { PageHandler } = useFunnel({
    pageNumberList: [1],
    prevStep: { path: '/' },
    nextStep: { path: '/common/checkAfterAlreadyAppliedStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보 확인하기" />
      <PageLayout.SingleCardBody>
        <FirstPage />
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={1}
        totalPage={1}
        onPrev={PageHandler.onPrev}
        onNext={PageHandler.onNext}
      />
    </PageLayout>
  );
};

export default CommonVerifyForCheckAfterAlreadyAppliedStep;
