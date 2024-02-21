import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import { useAtomValue } from 'jotai';
import Header from '~/components/layout/header/Header';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import { meetingTypeAtom } from '~/store/meeting/common';

const BranchGatewayStep = () => {
  const isPageFinished = useAtomValue(pageFinishAtom);
  const meetingType = useAtomValue(meetingTypeAtom);
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/univVerificationStep');
  const onNext = () => navigate('/');
  // location으로 자료 받기
  return (
    <>
      <Header
        title={'04. 시대팅 이용 서약'}
        isProgress={true}
        totalStep={meetingType === 'personal'}
        currentStep={}
      />

      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
        <Footer
          currentPage={1}
          totalPage={1}
          isAbled={isPageFinished}
          onNext={onNext}
          onPrev={onPrev}
        />
      </Col>
    </>
  );
};

export default BranchGatewayStep;
