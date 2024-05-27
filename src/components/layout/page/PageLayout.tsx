import { css } from '@emotion/react';
import { colors } from '~/styles/colors';
import Header from './header/Header';
import SingleCardBody from './body/SingleCardBody';
import DoubleCardBody from './body/DoubleCardBody';
import Footer from './footer/Footer';
import { motion } from 'framer-motion';
import { navigateNextStepAtom } from '~/models/funnel';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { isUseFramerMotionAtom } from '~/models/common/data';

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  const navigateNextStep = useAtomValue(navigateNextStepAtom);
  const isUseFramerMotion = useAtomValue(isUseFramerMotionAtom);

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

  return isUseFramerMotion ? (
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
      transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  ) : (
    <div
      css={css`
        height: 100dvh;
        width: 100vw;
        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: ${colors.Primary500};
      `}>
      {children}
    </div>
  );
};

const PageLayout = Object.assign(PageTemplate, {
  SingleCardBody,
  DoubleCardBody,
  Header,
  Footer,
});

export default PageLayout;
