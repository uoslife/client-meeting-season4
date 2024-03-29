import { RequestPayParams, RequestPayResponse } from '~/types/payment.type';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PaymentAPI } from '~/api';
import { PaymentResponse } from '~/api/types/payment.type';
import toast from 'react-hot-toast';
import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { commonDataAtoms } from '~/models/common/data';
import { useAtomValue } from 'jotai';
import { personalDataAtoms } from '~/models/personal/data';
import { css } from '@emotion/react';
import { groupDataAtoms } from '~/models/group/data';

const ID = 'imp04325748';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // api 데이터 관리용
  const [userPaymentInfo, setUserPaymentInfo] =
    useState<PaymentResponse | null>(null);
  const meetingTypeValue = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );
  const { gender: personalGender, name: personalName } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page1,
  );
  const { gender: groupGender, name: groupName } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page1,
  );
  const { phone: personalPhone } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page2,
  );
  const { phone: groupPhone } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page2,
  );

  const handleProductInfo = (type: string) => {
    if (meetingTypeValue.meetingType === 'group' && groupGender === 'F') {
      return type === 'name' ? '3:3 미팅(여자)' : 10500;
    }
    if (meetingTypeValue.meetingType === 'group' && groupGender === 'M') {
      return type === 'name' ? '3:3 미팅(남자)' : 12000;
    }
    if (meetingTypeValue.meetingType === 'personal' && personalGender === 'F') {
      return type === 'name' ? '1:1 미팅(여자)' : 3500;
    }
    if (meetingTypeValue.meetingType === 'personal' && personalGender === 'M') {
      return type === 'name' ? '1:1 미팅(남자)' : 4000;
    }
  };

  const onClickPaymeny = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP?.init(ID);

    const data: RequestPayParams = {
      pg: 'welcome', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method: 'card', // 결제수단
      // merchant_uid: userPaymentInfo?.merchantUid ?? '', // 주문번호
      // 테스트용 주문번호
      merchant_uid: `test_uoslife_meeting_${Math.floor(Math.random() * (10000 + 1)) + 1000}`, // 주문번호
      amount: userPaymentInfo?.price ?? Number(handleProductInfo('price')!), // 결제금액
      name: '시대팅 Season4 참가비', // 주문명
      buyer_tel:
        meetingTypeValue.meetingType === 'group' ? groupPhone : personalPhone, // 구매자 전화번호
      buyer_name:
        meetingTypeValue.meetingType === 'group' ? groupName : personalName,
      m_redirect_url: import.meta.env.DEV
        ? 'http://localhost:5173/common/paymentResultStep'
        : 'https://meeting.alpha.uoslife.com/common/paymentResultStep',
    };

    IMP?.request_pay(data, callback);
  };

  //pc 버전 콜백
  function callback(response: RequestPayResponse) {
    const { error_code, error_msg } = response;
    // pc에서 결제도중 취소하는 경우
    if (
      error_code === 'F400' &&
      error_msg === '사용자가 결제를 취소하였습니다'
    ) {
      return toast.error('결제를 취소하셨습니다!', {
        duration: 1500,
      });
    }
    navigate('/common/paymentResultStep', {
      state: response,
    });
  }

  const handlePaymentRequest = async () => {
    const res = await PaymentAPI.requestPayment({
      pg: 'welcome',
      payMethod: 'card',
    });
    setUserPaymentInfo(res.data.data);
  };

  useEffect(() => {
    if (location.state?.cancelToast) {
      toast.error('결제를 취소하셨습니다.', {
        duration: 1800,
      });
    }
    setTimeout(() => {
      handlePaymentRequest();
    }, 2000);
    // TODO: setTimeout 제거
  }, []);

  return (
    <Col
      align={'center'}
      justify={'space-between'}
      padding={'36px 20px'}
      css={css`
        height: 100%;
      `}>
      <Col gap={30}>
        <Col align={'center'} gap={12}>
          <Text
            label={'참가비를 결제해주세요!'}
            color={'Gray500'}
            typography={'NeoTitleM'}
          />
          <Text
            label={
              '매칭 신청을 위한 결제를 진행합니다. \n' +
              '매칭 실패 시 결제 금액 전액을 환불해드립니다.'
            }
            color={'Secondary800'}
            typography={'GoThicBodyS'}
          />
        </Col>
        <Col gap={12}>
          <S.productInformationBox>
            <Text
              label={'상품명'}
              color={'Gray500'}
              typography={'GoThicButtonM'}
            />
            <Text
              label={String(handleProductInfo('name'))}
              color={'Gray500'}
              typography={'GoThicTitleS'}
            />
          </S.productInformationBox>
          <S.productInformationBox>
            <Text
              label={'상품 금액'}
              color={'Gray500'}
              typography={'GoThicButtonM'}
            />
            <Text
              label={handleProductInfo('price') + '원'}
              color={'Gray500'}
              typography={'GoThicTitleS'}
            />
          </S.productInformationBox>
        </Col>
      </Col>
      <RoundButton
        status={'active'}
        onClick={onClickPaymeny}
        label={'결제하기'}
      />
    </Col>
  );
};

export default PaymentPage;

const S = {
  productInformationBox: styled.div`
    border: 1px solid ${colors.Gray300};
    border-radius: 6px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
};
