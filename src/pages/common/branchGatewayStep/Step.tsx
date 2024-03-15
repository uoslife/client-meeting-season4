import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import { meetingTypeAtom } from '~/store/meeting';
import { useAtomValue } from 'jotai';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';

const CommonBranchGatewayStep = () => {
  const meetingTypeValue = useAtomValue(meetingTypeAtom);
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: {
      path:
        meetingTypeValue === 'group'
          ? '/group/roleSelectStep'
          : '/personal/myInformationStep',
    },
    prevStep: {
      path: '/common/univVerificationStep',
    },
  });

  const stepToGoBack = useStepToGoBack('commonBranchGatewayStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header title={'시대팅 종류 선택'} isProgress={false} />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={1}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default CommonBranchGatewayStep;
