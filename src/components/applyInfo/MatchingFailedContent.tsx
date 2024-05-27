import styled from '@emotion/styled';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { colors } from '~/styles/colors';
import PageLayout from '../layout/page/PageLayout';
import Col from '../layout/Col';
import Text from '../typography/Text';
import RoundButton from '../buttons/roundButton/RoundButton';
import { css } from '@emotion/react';

const CryingFace = () => (
  <img
    width={35}
    height={35}
    src="/images/icons/crying-face.png"
    alt="crying-face"
  />
);

const MatchingFailedContent = () => {
  const navigate = useTypeSafeNavigate();

  return (
    <PageLayout>
      <PageLayout.Header title={'매칭 결과'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding={'0'}>
        <S.BodyInnerContainer>
          <Col align="center" gap={28}>
            <Text
              label="매칭된 상대방을 찾을 수 없습니다."
              color="Gray500"
              typography="NeoTitleM"
            />
            <S.Box>
              <CryingFace />
              <Col align={'center'} gap={17}>
                <Col align={'center'}>
                  <Text
                    color="Gray500"
                    label={'* 시대팅을 신청하셨나요?'}
                    typography="GoThicTitleS"
                  />
                  <Text
                    color="Gray500"
                    label={
                      '한정된 인원으로 매칭에 \n' +
                      '매칭에 실패하셨음을 알려드립니다. \n' +
                      '결제하신 금액은 곧 환불될 예정입니다.'
                    }
                    typography="GoThicBodyS"
                  />
                </Col>
                <Col align={'center'}>
                  <Text
                    color="Gray500"
                    label={'* 3대3 미팅의 팅원이신가요?'}
                    typography="GoThicTitleS"
                  />
                  <Text
                    color="Gray500"
                    label={'팅장만 매칭 결과를 확인할 수 있습니다.'}
                    typography="GoThicBodyS"
                  />
                </Col>
                <Col align={'center'}>
                  <Text
                    color="Gray500"
                    label={'* 시대팅을 신청하지 않으셨나요?'}
                    typography="GoThicTitleS"
                  />
                  <Text
                    color="Gray500"
                    label={'시대팅 시즌5를 기대해주세요!'}
                    typography="GoThicBodyS"
                  />
                </Col>
                <Text
                  color="Gray500"
                  label={'다음 시즌에 더욱 좋은 서비스로 보답하겠습니다.'}
                  typography="GoThicTitleS"
                  css={css`
                    padding-top: 15px;
                  `}
                />
              </Col>
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

export default MatchingFailedContent;
