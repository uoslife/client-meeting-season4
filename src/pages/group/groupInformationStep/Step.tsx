import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/components/layout/Col';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPapge';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import PageLayout from '~/components/layout/page/PageLayout';

const PAGE_NUMBER = [1, 2, 3, 4, 5];

const GroupInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/group/groupPreferStep' },
    prevStep: { path: '/common/branchGateWayStep' },
    // 기획에게 뒤로 가기 시, 팅 참여 항목으로 다시 돌아가게끔 할 것인지 물어보기
  });
  const isPageFinished = useAtomValue(pageFinishAtom);

  return (
    <PageLayout>
      <PageLayout.Header
        title={'03. 우리 팅 정보 입력하기'}
        isProgress={true}
        currentStep={3}
        totalStep={7}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={2}>
          <SecondPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={3}>
          <ThirdPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={4}>
          <ForthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={5}>
          <FifthPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        isAbled={isPageFinished}
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupInformationStep;
