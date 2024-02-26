import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useAtomValue, useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';

const PAGE_NUMBER = [1, 2, 3, 4, 5];

const MyRomanceStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/personal/myPreferTypeStep' },
    prevStep: { path: '/personal/myInformationStep' },
  });

  const questionState = useAtomValue(personalApplyAtoms.info_question);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  // 현재 페이지의 label값이 truthy value라면 Next Button 활성화
  setIsPageFinished(!!questionState.data[currentPage - 1].label);

  return (
    <PageLayout>
      <PageLayout.Header
        title={'02. 나의 연애 스타일 알아보기'}
        isProgress={true}
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
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
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default MyRomanceStep;
