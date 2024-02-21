import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPapge';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import Header from '~/components/layout/header/Header';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';

const PAGE_NUMBER = [1, 2, 3, 4, 5, 6];

const MyInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/personal/myRomanceStep' },
    prevStep: { path: '/common/branchGateWayStep' },
  });
  const isPageFinished = useAtomValue(pageFinishAtom);

  return (
    <>
      <Header
        title={'01. 나의 정보 입력하기'}
        isProgress={true}
        currentStep={1}
        totalStep={6}
      />
      <Col justify={'space-between'} align={'center'}>
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
          <Funnel.Page pageNumber={6}>
            <SixthPage />
          </Funnel.Page>
        </Funnel>
        <Footer
          currentPage={currentPage}
          totalPage={PAGE_NUMBER.length}
          isAbled={isPageFinished}
          onNext={PageHandler.onNext}
          onPrev={PageHandler.onPrev}
        />
      </Col>
    </>
  );
};

export default MyInformationStep;
