import Col from '~/components/layout/Col';
import Header from '~/components/layout/header/Header';
import { useNavigate } from 'react-router-dom';

const CheckApplyInfoStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/paymentStep');
  const onNext = () => navigate('/common/finishApplyStep');

  return (
    <>
      <Header title={'신청 정보 확인하기'} isProgress={false} />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
      </Col>
    </>
  );
};
// meetingType이 group일 때, personal일 때의 분기 처리가 필요.

export default CheckApplyInfoStep;
