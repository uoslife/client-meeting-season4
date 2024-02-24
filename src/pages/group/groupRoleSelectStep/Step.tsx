import Col from '~/components/layout/Col';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';

const GroupRoleSelectStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/branchGateWayStep');
  const onNext = () => navigate('/group/groupInformationStep');
  // 그룹을 만들지, 참여할지에 따른 navigate 분기 처리 필요.

  return (
    <PageLayout>
      <PageLayout.Header title={'3:3 미팅'} isProgress={false} />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
      </Col>
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
