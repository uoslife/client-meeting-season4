import Col from '~/components/layout/Col';
import { useAtomValue } from 'jotai';
import { meetingTypeAtom } from '~/store/meeting/common';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';

const PrivacyPolicyStep = () => {
  const navigate = useNavigate();
  const meetingType = useAtomValue(meetingTypeAtom);

  const onPrev = () => {
    navigate(
      meetingType === 'personal'
        ? '/personal/myPreferTypeStep'
        : '/group/groupPreferTypeStep',
    );
  };

  const onNext = () => {
    navigate('/common/paymentStep');
  };

  return (
    <PageLayout>
      <PageLayout.Header
        isBackArrow={true}
        title={'개인정보 처리 방침'}
        isProgress={false}
      />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
      </Col>
      <PageLayout.Footer
        totalPage={1}
        currentPage={1}
        onPrev={onPrev}
        onNext={onNext}
      />
    </PageLayout>
  );
};

export default PrivacyPolicyStep;
