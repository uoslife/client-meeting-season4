import styled from '@emotion/styled';
import Paddler from '../Pad';

const BodyCardWrapper = ({ children }: { children: React.ReactNode }) => (
  <S.DashedLine>
    <Paddler top={5} bottom={5} right={5} left={5}>
      {children}
    </Paddler>
  </S.DashedLine>
);

const S = {
  DashedLine: styled.div`
    border-image-slice: 15;
    border-image-width: 18px;
    border-image-repeat: repeat;
    border-image-source: url('/images/dashed-line-bg-white.png');
  `,
};

export default BodyCardWrapper;
