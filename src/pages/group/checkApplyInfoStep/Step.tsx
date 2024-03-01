import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';
import { pageFinishAtom } from '~/store/funnel';
import { useSetAtom } from 'jotai';
import { colors } from '~/styles/colors';

const GroupCheckApplyInfoStep = () => {
  // TODO: 모달 컴포넌트와 관리 로직

  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: { path: '/common/paymentStep' },
  });

  useSetAtom(pageFinishAtom)(true);

  return (
    <PageLayout>
      <PageLayout.Header title={`07. 신청 정보 확인하기`} isProgress={false} />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        innerPadding="20px 20px"
        outerPadding="22px 16px"
        backgroundColorName="White"
        borderExceptTop={`1px solid ${colors.Gray200}`}
        borderBottomRadius={21}
        totalPage={1}
        currentPage={currentPage}
        onPrev={PageHandler.onPrev}
        onNext={PageHandler.onNext}
      />
      {/* 여기에 Modal 넣기 */}
    </PageLayout>
  );
};

export default GroupCheckApplyInfoStep;
