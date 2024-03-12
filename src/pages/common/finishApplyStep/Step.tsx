import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const CommonFinishApplyStep = () => {
  const { Funnel } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/' },
    prevStep: { path: '/common/checkApplyInfoStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header title={'신청 완료!'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonFinishApplyStep;
