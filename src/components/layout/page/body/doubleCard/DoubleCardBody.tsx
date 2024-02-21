import { DoubleCardBodyProps } from '../Body.type';
import { getCardStyleProps } from '../Body.style';
import Card from '~/components/card/Card';
import CardConnector from '~/components/card/connectedTwoCards/CardConnector';
import S from './DoubleCardBody.style';

const fixedCardTheme = 'BG_WHITE';

const DoubleCardBody = ({
  topCardChildren,
  bottomCardChildren,
}: DoubleCardBodyProps) => {
  return (
    <S.DashedLineOuterPadding>
      <S.DashedLinedWrapper>
        <S.DashedInnerPadding>
          <Card
            {...getCardStyleProps(fixedCardTheme)}
            children={topCardChildren}
          />
          <S.ConnectorWrapper>
            <CardConnector />
          </S.ConnectorWrapper>
          <Card
            {...getCardStyleProps(fixedCardTheme)}
            scroll
            children={bottomCardChildren}
          />
        </S.DashedInnerPadding>
      </S.DashedLinedWrapper>
    </S.DashedLineOuterPadding>
  );
};

export default DoubleCardBody;
