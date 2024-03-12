import { useFunnel } from '~/hooks/useFunnel';

const GroupMemberPledgeStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    prevStep: { path: '/group/member/participateStep' },
    nextStep: { path: '/common/finishApplyStep' },
  });

  return (
    <div>
      <h1>Pledge Step</h1>
    </div>
  );
};

export default GroupMemberPledgeStep;
