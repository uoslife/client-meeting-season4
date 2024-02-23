import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPapge';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import Header from '~/components/layout/header/Header';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';

const PAGE_NUMBER = [1, 2, 3, 4, 5];

const MyRomanceStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/personal/mypPreferTypeStep' },
    prevStep: { path: '/personal/myInformationStep' },
  });
  const isPageFinished = useAtomValue(pageFinishAtom);

  return (
    <>
      <Header
        title={'02. 나의 연애 스타일 알아보기'}
        isProgress={true}
        currentStep={2}
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

export default MyRomanceStep;
