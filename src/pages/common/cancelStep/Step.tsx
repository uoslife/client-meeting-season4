import styled from '@emotion/styled';
import { useState } from 'react';
import { PaymentAPI } from '~/api';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { colors } from '~/styles/colors';

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

  const onClickCancelButton = async () => {
    try {
      await PaymentAPI.refundPayment();
      setIsCompleted(true);
    } catch (error) {
      console.log(error);
    }
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
