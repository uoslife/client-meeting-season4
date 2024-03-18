import { useSetAtom } from 'jotai';
import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import { pageFinishAtom } from '~/models/funnel';

const VerifyForCheckAfterAleadyAppliedStep = () => {
  const { PageHandler } = useFunnel({
    prevStep: { path: '/common/finishApplyStep' },
    nextStep: { path: '/common/checkAfterAleadyAppliedStep' },
    pageNumberList: [1],
  });
  useSetAtom(pageFinishAtom)(false);

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보 확인하기" />
      <PageLayout.SingleCardBody>
        TODO: 이메일 인증 페이지 구현 필요
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={1}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
        totalPage={1}
      />
    </PageLayout>
  );
};

export default VerifyForCheckAfterAleadyAppliedStep;
