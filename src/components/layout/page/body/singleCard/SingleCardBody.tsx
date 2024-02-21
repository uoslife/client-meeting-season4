import Card from '~/components/card/Card';
import { SingleCardBodyProps } from '../Body.type';
import { getCardStyleProps } from '../Body.style';
import S from './SingleCardBody.style';

const SingleCardBody = ({
  theme,
  children,
  cardPadding,
}: SingleCardBodyProps) => (
  <S.DashedLineOuterPadding>
    <S.DashedLinedWrapper>
      <S.DashedInnerPadding>
        <Card {...getCardStyleProps(theme)} padding={cardPadding} scroll>
          {children}
        </Card>
      </S.DashedInnerPadding>
    </S.DashedLinedWrapper>
  </S.DashedLineOuterPadding>
);

export default SingleCardBody;
