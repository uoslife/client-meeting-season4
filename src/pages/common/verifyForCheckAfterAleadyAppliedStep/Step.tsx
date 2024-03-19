import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';

const CommonVerifyForCheckAfterAleadyAppliedStep = () => {
  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보 확인하기" />
      <PageLayout.SingleCardBody>
        <FirstPage />
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonVerifyForCheckAfterAleadyAppliedStep;
