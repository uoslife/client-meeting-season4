import Col from '~/components/layout/Col';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';

const GroupPreferStep = () => {
  const navigate = useNavigate();

  const onPrev = () => navigate('/group/groupInformationStep');
  const onNext = () => navigate('/common/privacyPolicyStep');

  return (
    <PageLayout>
      <PageLayout.Header
        title={'04. 만나고 싶은 팅 정보 입력하기'}
        isProgress={true}
        totalStep={7}
        currentStep={4}
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

export default GroupPreferStep;
