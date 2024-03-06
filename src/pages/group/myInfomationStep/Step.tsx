import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import PageLayout from '~/components/layout/page/PageLayout';

const PAGE_NUMBER = [1, 2];

const MyInformationStep = () => {
  const isLeader = localStorage.getItem('groupRole_isLeader');
  console.log(isLeader);
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep:
      isLeader === 'true'
        ? { path: '/group/groupCreateStep' }
        : { path: '/group/groupParticipateStep' },
    prevStep: { path: '/group/groupRoleSelectStep' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'01. 나의 정보 입력하기'}
        isProgress={true}
        currentStep={1}
        totalStep={7}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={2}>
          <SecondPage />
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

export default MyInformationStep;
