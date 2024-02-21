import styled from '@emotion/styled';
import { InputProps } from './TextInput';
import { colors } from '~/styles/colors';
import '/public/fonts/GothicA1-Regular.ttf';

type InputStyledProps = Omit<InputProps, 'value'>;

export const Container = styled.div<InputStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${({ status }) => checkStatusType(status)};
`;

export const Input = styled.input<InputStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;

  //글씨체 컴포넌트 도입 후 수정
  font-family: 'GothicA1Type-Regular';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  &::placeholder {
    color: ${({ status }) =>
      status === 'default' ? `${colors.Gray300}` : `${colors.Gray500}`};
  }

  &:focus {
    outline: none;
  }
`;

//Icon 컴포넌트 도입 후 수정
export const Icon = styled.div<InputStyledProps>`
  display: ${({ isAuthentication, status }) =>
    isAuthentication === true && (status === 'focused' || status === 'error')
      ? 'flex'
      : 'none'};
  justify-content: center;
  align-items: center;
`;

const checkStatusType = (status: InputProps['status']) => {
  switch (status) {
    case 'default':
      return `${colors.Gray300}`;
    case 'focused':
      return `${colors.Primary500}`;
    case 'filled':
      return `${colors.Gray300}`;
    case 'error':
      return `${colors.Red200}`;
  }
};
