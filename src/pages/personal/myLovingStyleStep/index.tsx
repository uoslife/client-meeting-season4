import { useState } from 'react';
import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';

const PAGE_NUMBER = [1, 2, 3, 4, 5];

const MyLovingStyleStep = () => {
  const { Funnel, Page, setCurrentPage, totalPage, currentPage } =
    useFunnel(PAGE_NUMBER);
  const [isPageFinished, setIsPageFinished] = useState(false);

  const onNext = () => {
    setCurrentPage(prev => prev + 1);
    setIsPageFinished(false);
  };

  const onPrev = () => {
    setCurrentPage(prev => prev - 1);
  };

  return (
    <PageLayout>
      <PageLayout.Header
        title="02. 나의 연애 스타일 알아보기"
        isProgress
        currentPage={currentPage}
        totalPage={totalPage}
      />
      <Funnel>
        <Page pageNumber={1}>
          <FirstPage setIsPageFinished={setIsPageFinished} />
        </Page>
        <Page pageNumber={2}>
          <SecondPage setIsPageFinished={setIsPageFinished} />
        </Page>
        <Page pageNumber={3}>
          <ThirdPage setIsPageFinished={setIsPageFinished} />
        </Page>
        <Page pageNumber={4}>
          <ForthPage setIsPageFinished={setIsPageFinished} />
        </Page>
        <Page pageNumber={5}>
          <FifthPage setIsPageFinished={setIsPageFinished} />
        </Page>
      </Funnel>
      <PageLayout.Footer
        onNext={onNext}
        onPrev={onPrev}
        currentPage={currentPage}
        totalPage={totalPage}
        isAbled
      />
    </PageLayout>
  );
};

export default MyLovingStyleStep;
