import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { keyframes } from '@emotion/react';


export const downToUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const upToDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 24px 0 24px;
  border-radius: 24px 24px 0 0;
  width: 100%;
  box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.08);
  background-color: white;
  animation: ${({ isActive }) => (isActive ? downToUp : upToDown)} 0.5s forwards;
`;

export const GrayHandler = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin-bottom: 16px;
  background-color: ${colors.Secondary200};
`;

export const ParticipantCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 4px;
`;

export const DivLine = styled.div`
  width: 100%;
  margin-bottom: 16px;
  border-top: 1px solid ${colors.Secondary200};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
  padding: 16px 0px 20px 0px;
`;
