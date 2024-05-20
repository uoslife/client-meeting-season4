import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { Button } from '~/components/buttons/roundButton/RoundButton.style';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import CommentComponents from './components/Comments';
import Game from './components/Game';
import IconButton from '~/components/buttons/iconButton/IconButton';
import uoslifeBridge from '~/bridge';

const modeAtom = atom<'LANDING' | 'PLAYING'>('LANDING');

const LandingMode = () => {
  const setMode = useSetAtom(modeAtom);

  return (
    <Col
      align="center"
      justify="space-between"
      css={css`
        height: 100%;
      `}>
      <Paddler top={12} right={36} left={36}>
        <img
          src="/images/roulette/landing.png"
          css={css`
            object-fit: cover;
          `}
          alt="랜딩 이미지"
        />
        <CommentComponents.Title />
      </Paddler>
      <Paddler bottom={30} left={20} right={20}>
        <Col gap={16} align="center">
          <CommentComponents.Describing />
          <Button
            width={'full'}
            status="active"
            onClick={() => setMode('PLAYING')}>
            <Text color="White" label="룰렛 돌리기" typography="NeoButtonL" />
            <img src="\images\icons\next-icon-white.svg" alt="" />
          </Button>
        </Col>
      </Paddler>
    </Col>
  );
};

const PlayingMode = () => (
  <Paddler top={32} right={16} left={16} bottom={16}>
    <Col align="center" gap={28}>
      <div>
        <img
          src="/images/roulette/logo.png"
          css={css`
            object-fit: cover;
            width: 248px;
          `}
        />
        <CommentComponents.Title />
      </div>
      <Game />
    </Col>
  </Paddler>
);

const CustomHeader = () => (
  <S.CustomHeaderContainer>
    <S.BackArrowWrapper>
      <IconButton
        iconName={'headerButton-backArrow'}
        width={24}
        height={25.5}
        onClick={async () => await uoslifeBridge.goBack()}
      />
    </S.BackArrowWrapper>
    <Text label={'시2k'} color={'White'} typography={'NeoTitleM'} />
  </S.CustomHeaderContainer>
);

const RoulettePage = () => {
  const mode = useAtomValue(modeAtom);

  return (
    <PageLayout>
      <CustomHeader />
      <PageLayout.SingleCardBody cardPadding="0">
        {mode === 'LANDING' ? <LandingMode /> : <PlayingMode />}
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default RoulettePage;

const S = {
  CustomHeaderContainer: styled.div`
    width: 100%;
    padding: 16px 16px;
    position: relative;

    display: flex;
    justify-content: center;
  `,
  BackArrowWrapper: styled.div`
    position: absolute;
    left: 16px;
  `,
};
