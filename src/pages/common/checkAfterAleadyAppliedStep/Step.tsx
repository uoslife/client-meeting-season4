import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import PageLayout from '~/components/layout/page/PageLayout';
import { savedApplyInfoViewAtom } from '~/store/meeting';

const CheckAfterAleadyAppliedStep = () => {
  const savedViewInfo = useAtomValue(savedApplyInfoViewAtom);
  const navigate = useNavigate();

  // 저장된 정보가 없다면 인증 페이지로 리다이렉트
  if (!savedViewInfo) {
    // TODO: 인증 페이지로 수정
    navigate('/common/verifyForCheckAfterAleadyAppliedStep');
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보" />
      <PageLayout.SingleCardBody>
        <ApplyInfo.CustomDoubleCard {...savedViewInfo} />
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CheckAfterAleadyAppliedStep;
