import styled from '@emotion/styled';
import { ProgressHeaderProps } from '~/components/layout/header/Header';
import { colors } from '~/styles/colors';

export const Container = styled.header<Pick<ProgressHeaderProps, 'isProgress'>>`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  gap: 16px;
  padding: 16px 8px;
  background: ${colors.Primary500};
  color: ${colors.White};
`;

export const DummyBox = styled.div`
  height: 24px;
  width: 24px;
`;

export const HeaderTitle = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
`;

export const ProgressBar = styled.div<{ size: number }>`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: ${colors.Primary100};
  flex: 1;

  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    height: 4px;
    width: ${({ size }) => (size ? size : 0)}%;
    min-width: 0;
    max-width: 100%;
    border-radius: 4px;
    background: ${colors.Primary300};
    transition: 0.5s ease-in-out;
  }
`;
