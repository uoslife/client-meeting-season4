import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';
import { groupDataAtoms } from '~/models/group/data';
import { useAtomValue } from 'jotai';

const GroupRoleSelectStep = () => {
  const pageState = useAtomValue(groupDataAtoms.groupRoleSelectStep.page1);

  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1] as const,
    prevStep: { path: '/common/branchGatewayStep' },
    nextStep: {
      path: pageState.isLeader
        ? '/group/leader/myInformationStep'
        : '/group/member/myInformationStep',
    },
  });

  return (
    <PageLayout>
      <PageLayout.Header title={'3:3 미팅'} isProgress={false} />
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

export default GroupRoleSelectStep;
