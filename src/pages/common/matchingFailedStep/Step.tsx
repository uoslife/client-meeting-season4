import styled from '@emotion/styled';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
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

const CommonMatchingFailedStep = () => {
  const navigate = useTypeSafeNavigate();

  return (
    <PageLayout>
      <PageLayout.Header title={'매칭 결과'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        <S.BodyInnerContainer>
          <Col align="center" gap={28}>
            <Text
              label="매칭이 실패하였습니다."
              color="Gray500"
              typography="NeoTitleM"
            />
            <S.Box>
              <CryingFace />
              <Text
                color="Gray500"
                label={
                  '한정된 인원으로 매칭에 \n' +
                  '어려움이 생겼음을 알려드립니다. \n' +
                  '다음 시즌에 더욱 좋은 서비스로 보답하겠습니다. \n' +
                  '신청 시 결제하신 금액은 곧 환불될 예정이니, \n' +
                  '조금만 기다려주세요.'
                }
                typography="GoThicBodyS"
              />
            </S.Box>
          </Col>
          <RoundButton onClick={() => navigate('/')} status={'active'}>
            <Text color="White" label="확인" typography="NeoButtonL" />
          </RoundButton>
        </S.BodyInnerContainer>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonMatchingFailedStep;

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
};
