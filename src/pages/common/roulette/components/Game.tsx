import { useEffect, useState } from 'react';
import Text from '~/components/typography/Text';
import S from './Game.style';
import Col from '~/components/layout/Col';

const StartButton = ({
  onClick,
  isSpinning,
}: {
  onClick: () => void;
  isSpinning: boolean;
}) => (
  <S.StartButtonContainer onClick={onClick}>
    <Text
      color="White"
      label={isSpinning ? 'STOP' : 'START'}
      typography="NeoButtonL"
    />
  </S.StartButtonContainer>
);

const SideIrumae = () => (
  <S.IrumaeWrapper>
    <img
      width={256}
      height={164}
      src="/images/roulette/side-irumae.png"
      alt="이루매"
    />
  </S.IrumaeWrapper>
);

const BottomArrow = () => (
  <S.ButtomArrowButtonWrapper>
    <img
      width={24}
      height={24}
      src="/images/roulette/bottom-arrow-button.png"
      alt="아래 방향 버튼"
    />
  </S.ButtomArrowButtonWrapper>
);

// 룰렛 지지대
const RouletteSupport = () => (
  <S.SupportWrapper>
    <img
      width={240}
      height={168}
      src="/images/roulette/support.png"
      alt="룰렛 지지대"
    />
  </S.SupportWrapper>
);

// 룰렛 본체
const RouletteBody = ({ rotate }: { rotate: number }) => (
  <S.BodyWrapper rotate={rotate}>
    <img
      width={304}
      height={304}
      src="/images/roulette/body.png"
      alt="룰렛 본체"
    />
  </S.BodyWrapper>
);

const UNIT_OF_ROTATION = 360 / 72;

const Game = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  // 회전된 정도
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      const spin = () => setRotate(prev => prev + UNIT_OF_ROTATION);
      const intervalID = setInterval(spin, 2);

      return () => clearInterval(intervalID);
    }
  }, [isSpinning, setRotate]);

  return (
    <Col align="center" gap={18}>
      <StartButton
        isSpinning={isSpinning}
        onClick={() => setIsSpinning(prev => !prev)}
      />
      <S.RouletteContainer>
        <BottomArrow />
        <RouletteBody rotate={rotate} />
        <RouletteSupport />
        <SideIrumae />
      </S.RouletteContainer>
    </Col>
  );
};

export default Game;
