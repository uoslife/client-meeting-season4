import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import Header from '~/components/layout/header/Header';
import { useNavigate } from 'react-router-dom';

const GroupParticipateStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/group/myInformationStep');
  const onNext = () => navigate('/common/privacyPolicyStep');

  return (
    <>
      <Header
        title={'02. 팅 참여하기'}
        isProgress={true}
        totalStep={3}
        currentStep={2}
      />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
        <Footer currentPage={1} totalPage={1} onNext={onNext} onPrev={onPrev} />
      </Col>
    </>
  );
};

export default GroupParticipateStep;
