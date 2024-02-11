import styled from '@emotion/styled';
import Card, { CardStyleProps } from '../card/Card';

type BodyCardType = 'DEFAULT' | 'BG_GREY' | 'DOUBLE';

type BodyContainerType = {
  cardType: BodyCardType;
  children: React.ReactNode;
};

const SelectedCard = ({ children, cardType }: BodyContainerType) => {
  // TODO: 필요한 컴포넌트 제작 후에 DOUBLE case 대응
  if (cardType === 'DOUBLE') return <>{children}</>;

  const isDefault = cardType === 'DEFAULT';
  const cardStyleProps: CardStyleProps = {
    backgroundColor: isDefault ? 'White' : 'Gray000',
    borderWidth: isDefault ? 2 : 1,
    borderColor: 'Gray500',
    borderRadius: 21,
  };

  return <Card {...cardStyleProps}>{children}</Card>;
};

const BodyContainer = ({ children, cardType }: BodyContainerType) => {
  return (
    <S.DashedBodyWrapper>
      <S.CardWrapper>
        <SelectedCard cardType={cardType}>{children}</SelectedCard>
      </S.CardWrapper>
    </S.DashedBodyWrapper>
  );
};

export default BodyContainer;

const S = {
  DashedBodyWrapper: styled.div`
    border-image-slice: 15;
    border-image-width: 18px;
    border-image-repeat: repeat;
    border-image-source: url('/images/dashed-line-bg-white.png');
  `,
  CardWrapper: styled.div`
    padding: 5px;
  `,
};
