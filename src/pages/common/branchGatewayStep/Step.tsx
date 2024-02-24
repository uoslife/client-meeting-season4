import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';

const BranchGatewayStep = () => {
  const isPageFinished = useAtomValue(pageFinishAtom);
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: {
      path: '/group/myInformationStep',
    },
    prevStep: {
      path: '/common/univVerificationStep',
    },
  });

  return (
    <PageLayout>
      <PageLayout.Header title={'시대팅 종류 선택'} isProgress={false} />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={1}
        isAbled={isPageFinished}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default BranchGatewayStep;
