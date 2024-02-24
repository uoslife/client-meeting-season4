import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/components/layout/Col';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPapge';
import ForthPage from './ForthPage';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';

const PAGE_NUMBER = [1, 2, 3, 4];

const MyPreferTypeStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/common/privacyPolicy' },
    prevStep: { path: '/personal/myRomance' },
  });

  const navigate = useNavigate();
  const isPageFinished = useAtomValue(pageFinishAtom);

  navigate('/personal/mypPreferType', {
    state: 4,
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'03. 선호하는 상대 정보 입력하기'}
        isProgress={true}
        currentStep={3}
        totalStep={6}
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

export default MyPreferTypeStep;
