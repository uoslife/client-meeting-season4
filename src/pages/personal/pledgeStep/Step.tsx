import { useFunnel } from '~/hooks/useFunnel';
import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { useSetAtom } from 'jotai';
import { navigateNextStepAtom } from '~/models/funnel';

const PAGE_NUMBER = [1];

const PersonalPledgeStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/personal/myPreferTypeStep' },
    nextStep: { path: '/common/checkApplyInfoStep' },
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('personalPledgeStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'04. 시대팅 이용 서약'}
        isProgress={true}
        currentStep={1}
        totalStep={1}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default PersonalPledgeStep;
