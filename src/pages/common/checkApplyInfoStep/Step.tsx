import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import { pageFinishAtom } from '~/store/funnel';
import { useAtomValue, useSetAtom } from 'jotai';
import { colors } from '~/styles/colors';
import FirstPage from './FirstPage';
import { meetingTypeAtom } from '~/store/meeting';

const CommonCheckApplyInfoStep = () => {
  // TODO: 모달 컴포넌트와 관리 로직

  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: { path: '/common/paymentStep' },
  });

  useSetAtom(pageFinishAtom)(true);

  const headerTitle =
    useAtomValue(meetingTypeAtom) === 'group'
      ? '07. 신청 정보 확인하기'
      : '06. 신청 정보 확인하기';

  return (
    <PageLayout>
      <PageLayout.Header title={headerTitle} isProgress={false} />
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
// meetingType이 group일 때, personal일 때의 분기 처리가 필요.

export default CommonCheckApplyInfoStep;
