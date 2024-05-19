import { forwardRef, useRef, useState } from 'react';
import Text from '~/components/typography/Text';
import S from './Game.style';
import Col from '~/components/layout/Col';
import { colors } from '~/styles/colors';

const StartButton = ({
  onClick,
  isSpinning,
}: {
  onClick: () => void;
  isSpinning: boolean;
}) => (
  <S.StartButtonContainer
    onClick={onClick}
    bgColor={isSpinning ? 'gray' : colors.LightBlue}>
    <Text
      color="White"
      label={isSpinning ? 'WAIT' : 'START'}
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
const RouletteBody = forwardRef<HTMLDivElement>((_, ref) => (
  <S.BodyWrapper ref={ref}>
    <img
      width={304}
      height={304}
      src="/images/roulette/body.png"
      alt="룰렛 본체"
    />
  </S.BodyWrapper>
));

const COLA = '콜라';
const SOJU = '소주';
const BEAR = '맥주';

const OPTIONS = [COLA, BEAR, COLA, BEAR, SOJU, COLA, BEAR, SOJU];
const OPTION_LENGTH = OPTIONS.length;

const DEG_PER_OPTION = 360 / OPTION_LENGTH;

// 기본 5바퀴 + 단일 옵션 절반 각도
const BASE_DEG = 360 * 5 + DEG_PER_OPTION / 2;

const STOP_DEG_CANDIDATES = Array.from(
  { length: OPTION_LENGTH },
  (_, i) => DEG_PER_OPTION * i,
);

const SPINNING_TIME = 2000;

const Game = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  // 회전된 정도

  const bodyRef = useRef<HTMLDivElement>(null);

  const start = () => {
    setIsSpinning(true);

    const rIndex = Math.floor(Math.random() * OPTION_LENGTH);

    const selectedOptionText = OPTIONS[rIndex];

    const selectedStopDeg = STOP_DEG_CANDIDATES[rIndex];

    const calculatedTotalSpinDeg = BASE_DEG + selectedStopDeg;

    bodyRef.current?.animate(
      [
        { transform: `rotate(0deg)` },
        { transform: `rotate(${calculatedTotalSpinDeg}deg)` },
      ],
      {
        fill: 'forwards',
        duration: SPINNING_TIME,
        easing: 'ease-out',
      },
    );

    setTimeout(() => {
      setIsSpinning(false);
      alert(selectedOptionText);
    }, SPINNING_TIME);
  };

  return (
    <Col align="center" gap={18}>
      <StartButton isSpinning={isSpinning} onClick={start} />
      <S.RouletteContainer>
        <BottomArrow />
        <RouletteBody ref={bodyRef} />
        <RouletteSupport />
        <SideIrumae />
      </S.RouletteContainer>
    </Col>
  );
};

export default Game;
