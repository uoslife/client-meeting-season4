import { RequestPayParams, RequestPayResponse } from '~/types/payment.type';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
import { PaymentResponse } from '~/api/types/payment.type';
import { PaymentAPI } from '~/api';
import axios from 'axios';
import { isLoggedInAtom } from '~/models/auth';

const ID = 'imp04325748';

const PaymentPage = () => {
  const [userPaymentInfo, setUserPaymentInfo] = useState<PaymentResponse>();
  const navigate = useNavigate();
  const location = useLocation();
  const meetingTypeValue = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );
  const { gender: personalGender } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page1,
  );
  const { gender: groupGender } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page1,
  );
  const logInValue = useAtomValue(isLoggedInAtom);

  const handleProductInfo = (type: string) => {
    if (meetingTypeValue.meetingType === 'group' && groupGender === 'FEMALE') {
      return type === 'name' ? '3:3 미팅(여자)' : 6000;
    }
    if (meetingTypeValue.meetingType === 'group' && groupGender === 'MALE') {
      return type === 'name' ? '3:3 미팅(남자)' : 6000;
    }
    if (
      meetingTypeValue.meetingType === 'personal' &&
      personalGender === 'FEMALE'
    ) {
      return type === 'name' ? '1:1 미팅(여자)' : 2000;
    }
    if (
      meetingTypeValue.meetingType === 'personal' &&
      personalGender === 'MALE'
    ) {
      return type === 'name' ? '1:1 미팅(남자)' : 2000;
    }
  };

  const handleProductPrice = (type: string) => {
    if (meetingTypeValue.meetingType === 'group' && groupGender === 'FEMALE') {
      return type === 'name' ? '3:3 미팅(여자)' : 10500;
    }
    if (meetingTypeValue.meetingType === 'group' && groupGender === 'MALE') {
      return type === 'name' ? '3:3 미팅(남자)' : 10500;
    }
    if (
      meetingTypeValue.meetingType === 'personal' &&
      personalGender === 'FEMALE'
    ) {
      return type === 'name' ? '1:1 미팅(여자)' : 3500;
    }
    if (
      meetingTypeValue.meetingType === 'personal' &&
      personalGender === 'MALE'
    ) {
      return type === 'name' ? '1:1 미팅(남자)' : 3500;
    }
  };

  const onClickPayment = async () => {
    /* 1. 가맹점 식별하기 */
    const data: RequestPayParams = {
      pg: 'welcome.IMP2000029', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      // pg: 'welcome', // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method: 'card', // 결제수단
      merchant_uid: userPaymentInfo?.merchantUid ?? '', // 주문번호
      amount: userPaymentInfo?.price ?? Number(handleProductInfo('price')!), // 결제금액
      name: '시대팅 Season4 참가비', // 주문명
      buyer_tel: userPaymentInfo?.phoneNumber,
      buyer_name: userPaymentInfo?.name,
      m_redirect_url: 'https://meeting.uoslife.com/common/paymentResultStep',
      app_scheme: 'uoslife',
    };

    // const isFromUoslifeWebView = !!window.ReactNativeWebView;

    // if (isFromUoslifeWebView) {
    //   /* 리액트 네이티브 환경에 대응하기 */
    //   uoslifeBridge.requestMeetingPayments({
    //     userCode: ID,
    //     data: data as IPaymentData,
    //   });
    // } else {
    /* 그 외 환경의 경우 */
    /* 가맹점 식별하기 */
    const { IMP } = window;
    IMP?.init(ID);
    /* 결제 창 호출하기 */
    IMP?.request_pay(data, callback);
    // }
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
    try {
      const res = await PaymentAPI.requestPayment({
        pg: 'WELCOME_PAYMENTS',
        payMethod: 'card',
      });
      setUserPaymentInfo(res.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data.code === 'P04') {
        toast.success('이미 신청하셨습니다!', {
          duration: 1800,
        });
      }
    }
  };

  useEffect(() => {
    console.log(userPaymentInfo, 1);
    if (location.state?.cancelToast) {
      toast.error('결제를 취소하셨습니다.', {
        duration: 1800,
      });
    }
    if (logInValue) handlePaymentRequest();
  }, [logInValue]);

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
            <div
              css={css`
                display: flex;
                gap: 10px;
                justify-content: center;
                align-items: center;
              `}>
              <del>{`${String(handleProductPrice('price'))}원`}</del>
              <Text
                label={handleProductInfo('price') + '원'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
              />
            </div>
          </S.productInformationBox>
        </Col>
      </Col>
      <RoundButton
        status={'active'}
        onClick={onClickPayment}
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
