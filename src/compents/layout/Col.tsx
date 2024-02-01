import { Combine } from '~/types/utils.type';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type ColProps = Combine<
  {
    gap?: number;
    reverse?: boolean;
    justify?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center';
    padding?: string;
    fill?: boolean;
    children: React.ReactNode;
  },
  React.ComponentProps<'div'>
>;

const Col = ({
  gap = 0,
  reverse = false,
  justify = 'flex-start',
  align = 'flex-start',
  padding = '0',
  fill = false,
  children,
  ...props
}: ColProps) => {
  return (
    <Container
      gap={gap}
      reverse={reverse}
      justify={justify}
      align={align}
      padding={padding}
      fill={fill}
      {...props}>
      {children}
    </Container>
  );
};

export default Col;

const Container = styled.div<ColProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap}px;
  padding: ${({ padding }) => padding};
  height: 100%;
  width: 100%;
  ${fill =>
    fill &&
    css`
      flex: 1;
    `}
`;
