import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import { useAtomValue } from 'jotai';
import Header from '~/components/layout/header/Header';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import { meetingTypeAtom } from '~/store/meeting/common';

const BranchGatewayStep = () => {
  const isPageFinished = useAtomValue(pageFinishAtom);
  const navigate = useNavigate();
  const meetingType = useAtomValue(meetingTypeAtom);

  const onPrev = () => navigate('/common/univVerificationStep');
  // 시립대일 때, 경희대 & 외대일 때 navigate 분기 처리 필요
  const onNext = () =>
    navigate(
      meetingType === 'personal'
        ? '/personal/myInformationStep'
        : '/group/groupInformationStep',
    );

  return (
    <>
      <Header title={'경희대 한국외대 구성원 인증'} isProgress={false} />
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
