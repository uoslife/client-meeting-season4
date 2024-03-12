import { useFunnel } from '~/hooks/useFunnel';

const GroupLeaderPledgeStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/group/leader/preferStep' },
    prevStep: { path: '/common/checkApplyInfoStep' },
  });

  // TODO: 시대팅 이용 서약 페이지 작성
  return null;
};

export default GroupLeaderPledgeStep;
