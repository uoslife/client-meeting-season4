import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import Header from '~/components/layout/header/Header';
import { useNavigate } from 'react-router-dom';

const GroupPreferStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/group/groupInformationStep');
  const onNext = () => navigate('/common/privacyPolicyStep');

  return (
    <>
      <Header
        title={'04. 만나고 싶은 팅 정보 입력하기'}
        isProgress={true}
        totalStep={7}
        currentStep={4}
      />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
        <Footer currentPage={1} totalPage={1} onNext={onNext} onPrev={onPrev} />
      </Col>
    </>
  );
};

export default GroupPreferStep;
