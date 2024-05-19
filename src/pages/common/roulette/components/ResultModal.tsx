import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import { colors } from '~/styles/colors';

const ResultModal = ({
  result,
  onClickConfirm,
}: {
  result: string | null;
  onClickConfirm: () => void;
}) => {
  if (!result) return null;

  return (
    <S.Background>
      <S.ModalContainer>
        <Col gap={16} align="center">
          <Text color="Gray500" label="룰렛 결과" typography="NeoBodyS" />
          <Row justify="center" align="center">
            <Text
              label="ㄴrºl&nbsp;"
              color="Gray190"
              typography="GoThicBodyS"
              size={20}
              weight={600}
            />
            <Text
              label={result}
              color="Primary500"
              typography="NeoBodyS"
              size={28}
              css={css`
                line-height: 28px;
              `}
            />
            <Text
              label="를 받ㅇr줘♥"
              color="Gray190"
              typography="GoThicBodyS"
              size={20}
              weight={600}
            />
          </Row>
          <S.ConfirmButtonContainer onClick={onClickConfirm}>
            <Text color="White" label="확인" typography="NeoBodyS" />
          </S.ConfirmButtonContainer>
        </Col>
      </S.ModalContainer>
    </S.Background>
  );
};

export default ResultModal;

const S = {
  Background: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;

    z-index: 100000000;

    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ModalContainer: styled.div`
    background-image: url('/images/roulette/result-modal.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: calc(100vw - 60px) 100%;

    width: calc(100vw - 60px);
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `,
  ConfirmButtonContainer: styled.div`
    width: 160px;
    height: 32px;

    background-color: ${colors.LightBlue};

    display: flex;

    align-items: center;
    justify-content: center;
  `,
};
