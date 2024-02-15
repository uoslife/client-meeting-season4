import { Combine } from '~/types/utils.type';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type RowProps = Combine<
  {
    gap?: number;
    reverse?: boolean;
    justify?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    align?: 'flex-start' | 'flex-end' | 'center' | 'unset';
    padding?: string;
    fill?: boolean;
    width?: 'full';
    children: React.ReactNode;
  },
  React.ComponentProps<'div'>
>;

const Row = ({
  gap = 0,
  reverse = false,
  justify = 'flex-start',
  align = 'flex-start',
  padding = '0',
  fill = false,
  width = 'full',
  children,
  ...props
}: RowProps) => {
  return (
    <Container
      gap={gap}
      reverse={reverse}
      justify={justify}
      align={align}
      padding={padding}
      width={width}
      fill={fill}
      {...props}>
      {children}
    </Container>
  );
};

export default Row;

const Container = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap}px;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => !!width && '100%'};
  ${({ fill }) =>
    fill &&
    css`
      flex: 1;
    `};
`;
