import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import { useAtomValue, useSetAtom } from 'jotai';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { commonDataAtoms } from '~/models/common/data';
import { navigateNextStepAtom } from '~/models/funnel';
import { isLoggedInAtom } from '~/models/auth';

const PAGE_NUMBER_LIST = [1];
const CommonBranchGatewayStep = () => {
  const isLoggedInValue = useAtomValue(isLoggedInAtom);
  const { meetingType } = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER_LIST,
    nextStep: {
      path:
        meetingType === 'group'
          ? '/group/roleSelectStep'
          : '/personal/myInformationStep',
    },
    prevStep: {
      path: isLoggedInValue ? '/' : '/common/univVerificationStep',
    },
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('commonBranchGatewayStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'시대팅 종류 선택'}
        isProgress={false}
        showGuidePopUp={true}
      />
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
