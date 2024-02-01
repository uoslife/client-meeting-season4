import { Global } from '@emotion/react';
import reset from '~/styles/reset';

type Props = {
  children: React.ReactElement;
};

const GlobalStyle = ({ children }: Props) => {
  return (
    <>
      <Global styles={reset} />
      {children}
    </>
  );
};

export default GlobalStyle;
