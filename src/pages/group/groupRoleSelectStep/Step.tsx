import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import Header from '~/components/layout/header/Header';
import { useNavigate } from 'react-router-dom';

const GroupRoleSelectStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/branchGateWayStep');
  const onNext = () => navigate('/group/groupInformationStep');
  // 그룹을 만들지, 참여할지에 따른 navigate 분기 처리 필요.

  return (
    <>
      <Header title={'3:3 미팅'} isProgress={false} />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
        <Footer currentPage={1} totalPage={1} onNext={onNext} onPrev={onPrev} />
      </Col>
    </>
  );
};

export default GroupRoleSelectStep;
