import { DoubleCardBodyProps } from './Body.type';
import { S, getCardStyleProps } from './Body.style';
import Card from '~/components/card/Card';
import CardConnector from '~/components/card/connectedTwoCards/CardConnector';

const fixedCardTheme = 'BG_WHITE';

// Card 두개로 구성되는 특이한 Body
const DoubleCardBody = ({
  topCardChildren,
  bottomCardPadding,
  bottomCardChildren,
  topCardPadding,
}: DoubleCardBodyProps) => {
  return (
    <S.DashedLineOuterPadding>
      <S.DashedLinedWrapper>
        <S.DoubleCardInnerPadding>
          <S.DoubleCardScrollArea>
            <Card
              padding={topCardPadding}
              {...getCardStyleProps(fixedCardTheme)}
              children={topCardChildren}
            />
            <S.ConnectorWrapper>
              <CardConnector />
            </S.ConnectorWrapper>
            <Card
              padding={bottomCardPadding}
              {...getCardStyleProps(fixedCardTheme)}
              children={bottomCardChildren}
            />
          </S.DoubleCardScrollArea>
        </S.DoubleCardInnerPadding>
      </S.DashedLinedWrapper>
    </S.DashedLineOuterPadding>
  );
};

export default DoubleCardBody;
