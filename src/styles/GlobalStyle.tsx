import { Global } from '@emotion/react';
import reset from '~/styles/reset';

const GlobalStyle = () => {
  return (
    <>
      <Global styles={reset} />
    </>
  );
};

export default GlobalStyle;
