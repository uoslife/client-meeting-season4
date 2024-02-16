import { ChangeEvent } from 'react';
import * as S from './TextInput.style';
import IconButton from '../buttons/iconButton/IconButton';

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
      <S.Icon status={status} isAuthentication={isAuthentication}>
        <IconButton
          iconName="clearButton"
          width={20}
          height={20}
          format="svg"
          onClick={onClick}
        />
      </S.Icon>
    </S.Container>
  );
};

export default TextInput;
