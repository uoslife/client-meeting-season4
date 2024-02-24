import Col from '~/components/layout/Col';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import { meetingTypeAtom } from '~/store/meeting/common';
import PageLayout from '~/components/layout/page/PageLayout';

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
    <PageLayout>
      <PageLayout.Header
        title={'경희대 한국외대 구성원 인증'}
        isProgress={false}
      />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
      </Col>
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
