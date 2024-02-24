import Col from '~/components/layout/Col';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from '~/pages/common/applyPledgeStep/FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const GroupRoleSelectStep = () => {
  const navigate = useNavigate();
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: { path: '/common/paymentStep' },
  });

  const onPrev = () => navigate('/common/branchGateWayStep');
  const onNext = () => navigate('/group/groupInformationStep');
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
        onNext={onNext}
        onPrev={onPrev}
      />
    </PageLayout>
  );
};

export default GroupRoleSelectStep;
