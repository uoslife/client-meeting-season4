import Col from '~/components/layout/Col';
import Footer from '~/components/layout/footer/Footer';
import { useAtomValue } from 'jotai';
import Header from '~/components/layout/header/Header';
import { pageFinishAtom } from '~/store/funnel';
import { useNavigate } from 'react-router-dom';

const PaymentStep = () => {
  const isPageFinished = useAtomValue(pageFinishAtom);
  const navigate = useNavigate();

  const onPrev = () => navigate('/common/paymentStep');
  const onNext = () => navigate('/');

  return (
    <>
      <Header title={'경희대 한국외대 구성원 인증'} isProgress={false} />
      <Col justify={'space-between'} align={'center'}>
        <div>미팅 종류 선택 페이지</div>
        <Footer
          currentPage={1}
          totalPage={1}
          isAbled={isPageFinished}
          onNext={onNext}
          onPrev={onPrev}
        />
      </Col>
    </>
  );
};

export default PaymentStep;
