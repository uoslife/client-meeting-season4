import Col from '~/components/layout/Col';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import { meetingTypeAtom } from '~/store/meeting/common';
import PageLayout from '~/components/layout/page/PageLayout';

const BranchGatewayStep = () => {
  const isPageFinished = useAtomValue(pageFinishAtom);
  const meetingType = useAtomValue(meetingTypeAtom);
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/univVerificationStep');
  const onNext = () => navigate('/');
  // location으로 자료 받기
  return (
    <PageLayout>
      <PageLayout.Header
        title={'04. 시대팅 이용 서약'}
        isProgress={true}
        totalStep={meetingType === 'personal'}
        currentStep={1}
      />
      <div>미팅 종류 선택 페이지</div>
      <PageLayout.Footer
        currentPage={1}
        totalPage={1}
        isAbled={isPageFinished}
        onNext={onNext}
        onPrev={onPrev}
      />
    </PageLayout>
  );
};

export default BranchGatewayStep;
