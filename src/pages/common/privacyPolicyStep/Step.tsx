import { useAtomValue } from 'jotai';
import { meetingTypeAtom } from '~/store/meeting/common';
import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import { useFunnel } from '~/hooks/useFunnel';

const PrivacyPolicyStep = () => {
  const meetingType = useAtomValue(meetingTypeAtom);
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1],
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: {
      path:
        meetingType === 'personal'
          ? '/personal/myPreferTypeStep'
          : '/group/groupPreferTypeStep',
    },
  });

  return (
    <PageLayout>
      <PageLayout.Header
        isBackArrow={true}
        title={'개인정보 처리 방침'}
        isProgress={false}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        totalPage={1}
        currentPage={1}
        onPrev={PageHandler.onPrev}
        onNext={PageHandler.onNext}
      />
    </PageLayout>
  );
};

export default PrivacyPolicyStep;
