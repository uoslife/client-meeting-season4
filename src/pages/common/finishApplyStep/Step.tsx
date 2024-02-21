import Col from '~/components/layout/Col';
import Header from '~/components/layout/header/Header';
import { useNavigate } from 'react-router-dom';

const FinishApplyStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/checkApplyInfoStep');
  const onNext = () => navigate('/');

  return (
    <>
      <Header title={'신청 완료!'} isProgress={false} />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
      </Col>
    </>
  );
};

export default FinishApplyStep;
