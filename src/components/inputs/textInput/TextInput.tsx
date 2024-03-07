import { ChangeEvent } from 'react';
import * as S from './TextInput.style';
import IconButton from '../../buttons/iconButton/IconButton';
import { Combine } from '~/types/utils.type';

export type InputProps = Combine<
  {
    type?: string;
    value: string;
    status: 'default' | 'focused' | 'filled' | 'error';
    placeholder?: string;
    onClick?: () => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    isAuthentication?: boolean;
    children?: React.ReactNode;
  },
  React.ComponentProps<'input'>
>;

const TextInput = ({
  type = 'text',
  value,
  status,
  placeholder,
  onClick,
  onChange,
  isAuthentication,
  children,
  ...props
}: InputProps) => {
  return (
    <S.Container status={status}>
      <S.Input
        type={type}
        value={value}
        status={status}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
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
      {children}
    </S.Container>
  );
};

export default TextInput;
