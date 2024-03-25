import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import { useAtomValue } from 'jotai';
import { colors } from '~/styles/colors';
import FirstPage from './FirstPage';
import { commonDataAtoms } from '~/models/common/data';
import { useState } from 'react';
import ApplicationModal from '~/components/modal/applicationModal/ApplicationModal';

const CommonCheckApplyInfoStep = () => {
  // TODO: 모달 컴포넌트와 관리 로직
  const { meetingType } = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );

  const { currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    prevStep: {
      path:
        meetingType === 'group'
          ? '/group/leader/pledgeStep'
          : '/personal/pledgeStep',
    },
    nextStep: { path: '/common/paymentStep' },
  });

  const headerTitle =
    meetingType === 'group'
      ? '07. 신청 정보 확인하기'
      : '06. 신청 정보 확인하기';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const onNext = () => {
    closeModal();
    setTimeout(() => {
      PageHandler.onNext();
    }, 500);
  };

  return (
    <PageLayout>
      <PageLayout.Header title={headerTitle} isProgress={false} />
      <FirstPage />
      <PageLayout.Footer
        innerPadding="20px 20px"
        outerPadding="22px 16px"
        backgroundColorName="White"
        borderExceptTop={`1px solid ${colors.Gray200}`}
        borderBottomRadius={21}
        totalPage={1}
        currentPage={currentPage}
        onPrev={PageHandler.onPrev}
        onNext={openModal}
      />
      <ApplicationModal
        isActive={isModalOpen}
        cancelButtonClicked={closeModal}
        joinButtonClicked={onNext}
      />
    </PageLayout>
  );
};

export default CommonCheckApplyInfoStep;
