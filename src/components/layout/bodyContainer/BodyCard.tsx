import Card, { CardStyleProps } from '../../card/Card';
import ConnectedTwoCards from '../../card/connectedTwoCards/ConnectedTwoCards';
import { BodyCardType, BodyProps } from './BodyContainer.type';

const BodyCard = ({ ...bodyProps }: BodyProps) => {
  const { bodyCardType } = bodyProps;
  const cardStyleProps = getCardStyleProps(bodyCardType);

  return bodyCardType === 'DOUBLE' ? (
    <ConnectedTwoCards {...bodyProps} {...{ cardStyleProps }} />
  ) : (
    <Card {...bodyProps} {...cardStyleProps} />
  );
};

const getCardStyleProps = (bodyCardType: BodyCardType): CardStyleProps => ({
  backgroundColorName: bodyCardType === 'SINGLE_BG_GREY' ? 'Gray000' : 'White',
  borderWidth: bodyCardType === 'SINGLE_BG_GREY' ? 1 : 2,
  borderColorName: 'Gray500',
  borderRadius: 21,
});

export default BodyCard;
