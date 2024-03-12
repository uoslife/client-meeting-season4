import { useFunnel } from '~/hooks/useFunnel';

const GroupMemberMyInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    prevStep: { path: '/group/roleSelectStep' },
    nextStep: { path: '/group/member/participateStep' },
  });

  // TODO: 팅 구성원용 내정보 입력페이지 작성
  return null;
};

export default GroupMemberMyInformationStep;
