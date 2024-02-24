import Col from '~/components/layout/Col';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';

const FinishApplyStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/checkApplyInfoStep');
  const onNext = () => navigate('/');

  return (
    <PageLayout>
      <PageLayout.Header title={'신청 완료!'} isProgress={false} />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
      </Col>
    </PageLayout>
  );
};

export default FinishApplyStep;
