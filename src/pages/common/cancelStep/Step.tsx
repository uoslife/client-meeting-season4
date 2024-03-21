import styled from '@emotion/styled';
import { useState } from 'react';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import TextInput from '~/components/inputs/textInput/TextInput';
import Col from '~/components/layout/Col';
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

const Logo = () => <img src="/images/uoslifeLogo-blue.png" alt="crying-face" />;

const FormDescription = () => (
  <S.FormDescriptionContainer>
    <CryingFace />
    <Text
      color="Gray500"
      label={
        '시대팅 신청을 취소하고 환불을 원하시면 \n' +
        '아래 이름(실명), 은행, 계좌번호를 입력해주세요.'
      }
      typography="GoThicBodyS"
    />
  </S.FormDescriptionContainer>
);

type FormObject = {
  [key in 'name' | 'bank' | 'account']: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
};

const CancellationForm = ({ formObject }: { formObject: FormObject }) => (
  <Col align="center" gap={28}>
    <Text label="다음에 만나요" color="Gray500" typography="NeoTitleM" />
    <Col gap={12}>
      <FormDescription />
      <TextInput
        onChange={formObject.name.onChange}
        value={formObject.name.value}
        status="default"
        placeholder="이름(실명)"
      />
      <TextInput
        onChange={formObject.bank.onChange}
        value={formObject.bank.value}
        status="default"
        placeholder="은행"
      />
      <TextInput
        onChange={formObject.account.onChange}
        value={formObject.account.value}
        status="default"
        placeholder="계좌번호"
      />
    </Col>
  </Col>
);

const CancellationCompleted = () => (
  <S.CancelCompleteWrapper>
    <Text
      label="신청 취소가 완료되었습니다"
      color="Gray500"
      typography="NeoTitleM"
    />
    <Logo />
    <Text
      color="Gray400"
      label={
        '작성해주신 계좌의 환불까지 \n' +
        '최대 7일의 시간이 소요될 수 있습니다. \n' +
        '이 점 양해 부탁드립니다.'
      }
      typography="GoThicBodyS"
    />
  </S.CancelCompleteWrapper>
);

const CommonCancelStep = () => {
  const navigate = useTypeSafeNavigate();
  const [isFinished, setIsFinished] = useState(false);
  const [form, setForm] = useState({
    name: '',
    bank: '',
    account: '',
  });

  const formObject: FormObject = {
    name: {
      onChange: e => setForm({ ...form, name: e.target.value }),
      value: form.name,
    },
    bank: {
      onChange: e => setForm({ ...form, bank: e.target.value }),
      value: form.bank,
    },
    account: {
      onChange: e => setForm({ ...form, account: e.target.value }),
      value: form.account,
    },
  };

  const isButtonActivated =
    isFinished || (form.name && form.bank && form.account);
  const buttonStatus = isButtonActivated ? 'active' : 'disabled';
  const onClickBottomButton = async () => {
    if (!isButtonActivated) return;

    if (!isFinished) {
      try {
        // await PaymentAPI.refundPayment(123);
        setIsFinished(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate('/');
    }
  };

  return (
    <PageLayout>
      <PageLayout.Header title="신청 취소" />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        <S.BodyInnerContainer>
          {!isFinished ? (
            <CancellationForm formObject={formObject} />
          ) : (
            <CancellationCompleted />
          )}
          <RoundButton onClick={onClickBottomButton} status={buttonStatus}>
            <Text color="White" label="확인" typography="NeoButtonL" />
          </RoundButton>
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
  FormDescriptionContainer: styled.div`
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
  CancelCompleteWrapper: styled.div`
    padding-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  `,
};
