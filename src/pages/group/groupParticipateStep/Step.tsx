import Col from '~/components/layout/Col';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';

const GroupParticipateStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/group/myInformationStep');
  const onNext = () => navigate('/common/privacyPolicyStep');

  return (
    <PageLayout>
      <PageLayout.Header
        title={'02. 팅 참여하기'}
        isProgress={true}
        totalStep={3}
        currentStep={2}
      />
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

export default GroupParticipateStep;
