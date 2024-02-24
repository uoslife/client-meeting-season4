import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from '~/pages/common/applyPledgeStep/FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const GroupRoleSelectStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/group/groupInformationStep' },
    prevStep: { path: '/common/branchGateWayStep' },
  });

  // 그룹을 만들지, 참여할지에 따른 navigate 분기 처리 필요.

  return (
    <PageLayout>
      <PageLayout.Header title={'3:3 미팅'} isProgress={false} />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={1}
        totalPage={1}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupRoleSelectStep;
