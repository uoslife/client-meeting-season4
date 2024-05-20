import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useAtomValue } from 'jotai';
import { isLoggedInAtom } from '~/models/auth';

const DEFAULT_PAGE_NUMBER = [1, 2, 3, 4];
const LOGINED_USER_PAGE_NUMBER = [1, 2, 3];

const CommonUnivVerificationStep = () => {
  const isLoggedInValue = useAtomValue(isLoggedInAtom);

  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: isLoggedInValue
      ? LOGINED_USER_PAGE_NUMBER
      : DEFAULT_PAGE_NUMBER,
    nextStep: {
      path: '/common/branchGatewayStep',
    },
    prevStep: { path: '/' },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        title={'경희대 한국외대 구성원 인증'}
        isProgress={false}
        showErrorButton={false}
      />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={2}>
            <ThirdPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={3}>
            <SecondPage />
          </Funnel.Page>
          {!isLoggedInValue ? (
            <Funnel.Page pageNumber={4}>
              <ForthPage />
            </Funnel.Page>
          ) : null}
        </Funnel>
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={
          isLoggedInValue
            ? LOGINED_USER_PAGE_NUMBER.length
            : DEFAULT_PAGE_NUMBER.length
        }
        onNext={PageHandler.onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default CommonUnivVerificationStep;
