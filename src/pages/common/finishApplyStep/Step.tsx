import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';

const CommonFinishApplyStep = () => {
  return (
    <PageLayout>
      <PageLayout.Header title={'신청 완료!'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        <FirstPage />
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonFinishApplyStep;
