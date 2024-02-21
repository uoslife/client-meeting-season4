import Col from '~/components/layout/Col';
import Header from '~/components/layout/header/Header';
import Footer from '~/components/layout/footer/Footer';
import { useAtomValue } from 'jotai';
import { meetingTypeAtom } from '~/store/meeting/common';
import { useNavigate } from 'react-router-dom';

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
    <>
      <Header
        isBackArrow={true}
        title={'개인정보 처리 방침'}
        isProgress={false}
      />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
        <Footer totalPage={1} currentPage={1} onPrev={onPrev} onNext={onNext} />
      </Col>
    </>
  );
};

export default PrivacyPolicyStep;
