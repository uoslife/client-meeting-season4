import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Header from '~/components/layout/header/Header';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';

const PAGE_NUMBER = [1, 2];

const MyInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/common/privacyPolicy' },
    prevStep: { path: '/group/groupRoleSelectStep' },
  });

  const isPageFinished = useAtomValue(pageFinishAtom);

  return (
    <>
      <Header
        title={'01. 나의 정보 입력하기'}
        isProgress={true}
        currentStep={1}
        totalStep={7}
      />
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

export default MyInformationStep;
