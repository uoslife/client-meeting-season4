import PageLayout from '~/components/layout/page/PageLayout';
import PaymentPage from '~/pages/common/paymentStep/PaymentPage';
import { useFunnel } from '~/hooks/useFunnel';
import { useSetAtom } from 'jotai';
import { navigateNextStepAtom } from '~/models/funnel';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { PaymentAPI } from '~/api';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { PaymentResponse } from '~/api/types/payment.type';
import axios from 'axios';

const PAGE_NUMBER = [1];

const CommonPaymentStep = () => {
  const { Funnel } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    nextStep: { path: '/common/finishApplyStep' },
    prevStep: { path: '/common/paymentStep' },
  });

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBackPersonal = useStepToGoBack('personalPledgeStep');
  const stepToGoBackGroup = useStepToGoBack('groupLeaderPledgeStep');
  const stepToGoBack = stepToGoBackPersonal && stepToGoBackGroup;
  const navigate = useTypeSafeNavigate();
  const [userPaymentInfo, setUserPaymentInfo] = useState<PaymentResponse>();
  const handlePaymentRequest = async () => {
    try {
      const res = await PaymentAPI.requestPayment({
        pg: 'WELCOME_PAYMENTS',
        payMethod: 'card',
      });
      setUserPaymentInfo(res.data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response?.data.code === 'P04') {
        toast.success('이미 신청하셨습니다!', {
          duration: 1800,
        });
      }
    }
  };

  useEffect(() => {
    setTimeout(handlePaymentRequest, 500);
  }, []);

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }
  return (
    <PageLayout>
      <PageLayout.Header title={'결제 하기'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <PaymentPage userPaymentInfo={userPaymentInfo} />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonPaymentStep;
