import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai/index';
import { pageFinishAtom } from '~/store/funnel';
import { useSetAtom } from 'jotai';

const CheckApplyInfoStep = () => {
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: { path: '/common/paymentStep' },
  });

  useEffect(() => {
    setIsPageFinished(true);
  }, []);

  return (
    <PageLayout>
      <PageLayout.Header title={'신청 정보 확인하기'} isProgress={false} />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        totalPage={currentPage}
        currentPage={2}
        onPrev={PageHandler.onPrev}
        onNext={PageHandler.onNext}
      />
    </PageLayout>
  );
};
// meetingType이 group일 때, personal일 때의 분기 처리가 필요.

export default CheckApplyInfoStep;
