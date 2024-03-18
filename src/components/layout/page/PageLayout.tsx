import { css } from '@emotion/react';
import { colors } from '~/styles/colors';
import Header from './header/Header';
import SingleCardBody from './body/SingleCardBody';
import DoubleCardBody from './body/DoubleCardBody';
import Footer from './footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { navigateNextStepAtom } from '~/models/funnel';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  const navigateNextStep = useAtomValue(navigateNextStepAtom);

  const handleEvent = () => {
    toast.error('하단 화살표로 이동해주세요!', {
      icon: '🥲',
      duration: 1800,
    });
    history.pushState(null, '', location.href);
  };

  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', handleEvent);
    return () => {
      window.removeEventListener('popstate', handleEvent);
    };
  }, []);

  return (
    <motion.div
      css={css`
        height: 100dvh;
        width: 100vw;
        position: absolute;

        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: ${colors.Primary500};
      `}
      initial={{
        x: navigateNextStep ? '100%' : '-100%',
      }}
      animate={{ x: '-50%' }}
      exit={{
        x: navigateNextStep ? '-100%' : '100%',
      }}
      onAnimationComplete={() => {
        console.log('애니메이션 완료!');
      }}
      transition={{ duration: 0.2 }}>
      {children}
      <Toaster />
    </motion.div>
  );
};

const PageLayout = Object.assign(PageTemplate, {
  SingleCardBody,
  DoubleCardBody,
  Header,
  Footer,
});

export default PageLayout;
