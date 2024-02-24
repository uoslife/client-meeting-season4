import Col from '~/components/layout/Col';
import { useAtomValue } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';
import PageLayout from '~/components/layout/page/PageLayout';

const PaymentStep = () => {
  const isPageFinished = useAtomValue(pageFinishAtom);
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/paymentStep');
  const onNext = () => navigate('/');

  return (
    <PageLayout>
      <PageLayout.Header
        title={'경희대 한국외대 구성원 인증'}
        isProgress={false}
      />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
      </Col>
      <PageLayout.Footer
        currentPage={1}
        totalPage={1}
        isAbled={isPageFinished}
        onNext={onNext}
        onPrev={onPrev}
      />
    </PageLayout>
  );
};

export default PaymentStep;
