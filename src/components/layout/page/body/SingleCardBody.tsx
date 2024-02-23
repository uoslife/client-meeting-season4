import Card from '~/components/card/Card';
import { SingleCardBodyProps } from './Body.type';
import { S, getCardStyleProps } from './Body.style';

// 대부분의 페이지 구성에 사용되는 Body
const SingleCardBody = ({
  children,
  theme = 'BG_WHITE',
  // 스크롤 영역 바깥의 padding(기본값: Footer 공간)
  cardPadding = '0 0 100px',
}: SingleCardBodyProps) => (
  <S.DashedLineOuterPadding>
    <S.DashedLinedWrapper>
      <S.SingleCardInnerPadding>
        <Card {...getCardStyleProps(theme)} padding={cardPadding} scroll>
          {children}
        </Card>
      </S.SingleCardInnerPadding>
    </S.DashedLinedWrapper>
  </S.DashedLineOuterPadding>
);

export default SingleCardBody;
