import { useSetAtom } from 'jotai';
import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import { pageFinishAtom } from '~/store/funnel';

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
        인증페이지를만들어야하는데기획에혼선이있네요?
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
