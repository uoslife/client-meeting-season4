import { useAtomValue } from 'jotai';
import FirstPage from './FirstPage';
import { meetingTypeAtom } from '~/store/meeting/common';
import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';

const CommonBranchGatewayStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    // deprecated
    prevStep: { path: '/common/checkApplyInfoStep' },
    nextStep: { path: '/common/branchGatewayStep' },
  });
  const meetingType = useAtomValue(meetingTypeAtom);

  return (
    <PageLayout>
      <PageLayout.Header
        title={'04. 시대팅 이용 서약'}
        isProgress={true}
        totalStep={meetingType === 'personal' ? 1 : 2}
        currentStep={1}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
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
