import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';

const PAGE_NUMBER = [1];

const GroupMemberPledgeStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/group/member/participateStep' },
    nextStep: { path: '/common/finishApplyStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'03. 시대팅 이용 서약'}
        isProgress={true}
        currentStep={1}
        totalStep={1}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
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

export default GroupMemberPledgeStep;
