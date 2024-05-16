import styled from '@emotion/styled';
import { useState } from 'react';
import { MeetingAPI, PaymentAPI } from '~/api';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { colors } from '~/styles/colors';
import { useSetAtom } from 'jotai/index';
import { isLoggedInAtom } from '~/models/auth';
import { useSetImmerAtom } from 'jotai-immer';
import { commonDataAtoms } from '~/models/common/data';
import { groupDataAtoms } from '~/models/group/data';
import toast from 'react-hot-toast';
import axios from 'axios';

const CryingFace = () => (
  <img
    width={35}
    height={35}
    src="/images/icons/crying-face.png"
    alt="crying-face"
  />
);

const Logo = () => (
  <img
    width={254}
    height={108}
    src="/images/uoslifeLogo-pink.png"
    alt="crying-face"
  />
);

const Ask = ({
  setIsCompleted,
}: {
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useTypeSafeNavigate();

  const onClickGoBackButton = () => {
    navigate('/common/checkAfterAlreadyAppliedStep');
  };

  const setLogInValue = useSetAtom(isLoggedInAtom);

  const setAuthPhoneVerification = useSetImmerAtom(
    commonDataAtoms.commonUnivVerificationStep.page3,
  );
  const setGroupMemberParticipate = useSetImmerAtom(
    groupDataAtoms.groupMemberParticipateStep.page1,
  );
  const setGroupLeaderGroupCreate = useSetImmerAtom(
    groupDataAtoms.groupLeaderGroupCreateStep.page2,
  );

  const handleRefundPayment = async () => {
    try {
      await PaymentAPI.refundPayment();
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data.code === 'P03') {
        toast.error(
          '결제가 제대로 처리되지 않았습니다! 시대생 카카오톡 채널로 문의해주세요!',
          {
            duration: 5000,
          },
        );
      }
      throw Error;
    }
  };

  const handleDeleteUser = async () => {
    try {
      await MeetingAPI.deleteUser();
    } catch (e) {
      throw Error;
    }
  };

  const handleResetInfo = () => {
    setLogInValue(false);
    setGroupMemberParticipate(() => ({
      verified: false,
    }));
    setGroupLeaderGroupCreate(() => ({
      joinCode: null,
      otherMembers: [null, null, null],
    }));
    setAuthPhoneVerification(() => ({
      verified: false,
    }));
  };

  const onClickCancelButton = async () => {
    await handleRefundPayment();
    await handleDeleteUser();
    handleResetInfo();
    setIsCompleted(true);
  };

  return (
    <S.AskWrapper>
      <S.AskTopArea>
        <Text color="Gray500" label="다음에 만나요." typography="NeoTitleM" />
        <S.Box>
          <CryingFace />
          <Text
            color="Gray500"
            label={
              '신청을 취소하면 되돌릴 수 없어요. \n' +
              '다시 한번 생각해 봐요. \n' +
              '정말 신청 취소할래요?'
            }
            typography="GoThicBodyS"
          />
        </S.Box>
      </S.AskTopArea>
      <S.BottomButtonsWrapper>
        <RoundButton onClick={onClickGoBackButton} status={'inactive'}>
          <Text color="Gray400" label="돌아가기" typography="NeoButtonL" />
        </RoundButton>
        <RoundButton onClick={onClickCancelButton} status={'active'}>
          <Text color="White" label="신청 취소 하기" typography="NeoButtonL" />
        </RoundButton>
      </S.BottomButtonsWrapper>
    </S.AskWrapper>
  );
};

const Completed = () => {
  const navigate = useTypeSafeNavigate();

  const onClickBottomButton = () => {
    navigate('/');
  };

  return (
    <S.CompletedWrapper>
      <S.CompletedTopArea>
        <Text
          label="신청 취소가 완료되었습니다"
          color="Gray500"
          typography="NeoTitleM"
        />
        <Logo />
        <Text
          color="Gray400"
          label={
            '신청 시 결제하신 금액은 곧 환불될 예정이니, \n' +
            '조금만 기다려주세요.'
          }
          typography="GoThicBodyS"
        />
      </S.CompletedTopArea>
      <S.BottomButtonsWrapper>
        <RoundButton onClick={onClickBottomButton} status={'active'}>
          <Text color="White" label="확인" typography="NeoButtonL" />
        </RoundButton>
      </S.BottomButtonsWrapper>
    </S.CompletedWrapper>
  );
};

const CommonCancelStep = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <PageLayout>
      <PageLayout.Header title="신청 취소" />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        <S.BodyInnerContainer>
          {!isCompleted ? (
            <Ask setIsCompleted={setIsCompleted} />
          ) : (
            <Completed />
          )}
        </S.BodyInnerContainer>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonCancelStep;

const S = {
  BodyInnerContainer: styled.div`
    padding: 36px 20px 24px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Box: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 20px;
    width: 100%;

    border-radius: 6px;
    border: 1px solid ${colors.Gray200};
    background: ${colors.Gray000};
  `,
  AskTopArea: styled.div`
    display: flex;
    flex-direction: column;

    gap: 28px;
    flex: 1;
  `,
  AskWrapper: styled.div`
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
  `,
  CompletedWrapper: styled.div`
    padding-top: 100px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    flex: 1;
  `,
  CompletedTopArea: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    flex: 1;
  `,
  BottomButtonsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
  `,
};
