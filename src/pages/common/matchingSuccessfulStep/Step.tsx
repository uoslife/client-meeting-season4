import PageLayout from '~/components/layout/page/PageLayout';

const CommonMatchingSuccessfulStep = () => {
  return (
    <PageLayout>
      <PageLayout.Header title={'매칭 성공'} isProgress={false} />
    </PageLayout>
  );
};

export default CommonMatchingSuccessfulStep;
