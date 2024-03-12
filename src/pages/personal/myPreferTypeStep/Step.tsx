import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPapge';
import ForthPage from './ForthPage';
import PageLayout from '~/components/layout/page/PageLayout';

const PAGE_NUMBER = [1, 2, 3, 4];

const PersonalMyPreferTypeStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/personal/myRomanceStep' },
    nextStep: { path: '/personal/pledgeStep' },
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
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default PersonalMyPreferTypeStep;
