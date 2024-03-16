import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';

const CommonPrivacyPolicyStep = () => {
  return (
    <PageLayout>
      <PageLayout.Header
        isBackArrow={true}
        backArrowNavigate="/common/branchGatewayStep"
        title={'개인정보 처리 방침'}
        isProgress={false}
      />
      <FirstPage />
    </PageLayout>
  );
};

export default CommonPrivacyPolicyStep;
