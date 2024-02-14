import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import { useState } from 'react';
import FirstPage from '~/pages/personal/myInformationStep/FirstPage';
import SecondPage from '~/pages/personal/myInformationStep/SecondPage';
import ThirdPage from '~/pages/personal/myInformationStep/ThirdPapge';
import ForthPage from '~/pages/personal/myInformationStep/ForthPage';
import FifthPage from '~/pages/personal/myInformationStep/FifthPage';
import SixthPage from '~/pages/personal/myInformationStep/SixthPage';

const PAGE_NUMBER = [1, 2, 3, 4, 5, 6];

const MyInformationStep = () => {
  const { Funnel, Page, setCurrentPage, currentPage } = useFunnel(PAGE_NUMBER);
  const [isPageFinished, setIsPageFinished] = useState(false);

  const onNext = () => {
    setCurrentPage(currentPage + 1);
    setIsPageFinished(false);
  };

  const onPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Col justify={'space-between'} align={'center'} padding={'36px 24px'}>
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
        <Page pageNumber={6}>
          <SixthPage setIsPageFinished={setIsPageFinished} />
        </Page>
      </Funnel>
      <Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        isDisabled={isPageFinished}
        onNext={() => onNext}
        onPrev={() => onPrev}
      />
    </Col>
  );
};

export default MyInformationStep;