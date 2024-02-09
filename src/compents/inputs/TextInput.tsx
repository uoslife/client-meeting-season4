import { ChangeEvent } from 'react';
import * as S from './TextInput.style';

export type InputProps = {
  type?: string;
  value: string;
  status: 'default' | 'focused' | 'filled' | 'error';
  placeholder?: string;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isAuthentication?: boolean;
};

const TextInput = ({
  type = 'text',
  value,
  status,
  placeholder,
  onClick,
  onChange,
  isAuthentication,
}: InputProps) => {
  return (
    <S.Container status={status}>
      <S.Input
        type={type}
        value={value}
        status={status}
        placeholder={placeholder}
        onChange={onChange}
      />
      <S.Icon
        type="button"
        status={status}
        onClick={onClick}
        isAuthentication={isAuthentication}>
        <img
          src="../../icon/x.png" //Icon 컴포넌트 도입 후 수정
        />
      </S.Icon>
    </S.Container>
  );
};

export default TextInput;
