import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { css } from '@emotion/react';

export const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 24px 0px 24px;
  border-radius: 24px 24px 0px 0px;
  width: 100%;
  box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.08);
  background-color: white;

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) =>
    isActive ? css`translateY(0)` : css`translateY(100%)`};
  transition: all 0.3s ease-in-out;
`;

export const GrayHandler = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin-bottom: 16px;
  background-color: ${colors.Secondary200};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
  padding: 16px 0px 20px 0px;
`;
