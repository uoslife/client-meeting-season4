import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { typographies } from '~/styles/typographies';

export const upToDown = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: 350px;
  }
`;

export const downToUp = keyframes`
  0% {
    opacity: 1;
    max-height: 350px;
  }
  100% {
    opacity: 0;
    max-height: 0;
  }
`;

export const InputWrapper = styled.div<{ showOption: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  border: 1px solid
    ${({ showOption }) =>
      showOption ? `${colors.Primary500}` : `${colors.Gray300}`};
  border-radius: ${props => (props.showOption ? '10px 10px 0px 0px' : '10px')};
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dropdown = styled.div<{ showOption: boolean }>`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${({ showOption }) => (showOption ? upToDown : downToUp)} 0.3s
    forwards;
  border: 1px solid ${colors.Primary500};
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;

export const DropdownOptions = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px 20px;
`;

export const DropdownOption = styled.div`
  ${typographies.GoThicButtonM};
  padding: 8px 0;
  color: ${colors.Gray475};
  cursor: pointer;
`;
