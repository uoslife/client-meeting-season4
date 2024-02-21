import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import { useAtomValue } from 'jotai';
import Header from '~/components/layout/header/Header';
import { pageFinishAtom } from '~/store/funnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const PAGE_NUMBER = [1, 2];

const UnivVerificationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/common/branchGateWayStep' },
    prevStep: { path: '/' },
  });
  const isPageFinished = useAtomValue(pageFinishAtom);

  return (
    <>
      <Header title={'경희대 한국외대 구성원 인증'} isProgress={false} />
      <Col justify={'space-between'} align={'center'}>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={2}>
            <SecondPage />
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

export default UnivVerificationStep;
