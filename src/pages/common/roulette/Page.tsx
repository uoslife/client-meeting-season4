import { css } from '@emotion/react';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { Button } from '~/components/buttons/roundButton/RoundButton.style';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import CommentComponents from './components/Comments';
import Game from './components/Game';

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

const RoulettePage = () => {
  const mode = useAtomValue(modeAtom);

  return (
    <PageLayout>
      <PageLayout.Header title="시2k" showErrorButton={false} />
      <PageLayout.SingleCardBody cardPadding="0">
        {mode === 'LANDING' ? <LandingMode /> : <PlayingMode />}
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default RoulettePage;
