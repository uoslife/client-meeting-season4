import * as S from './Button.style';
import { Combine } from '~/types/utils.type';

export type Props = Combine<
  {
    status: 'active' | 'inactive' | 'disabled';
    borderType?: 'primary' | 'black' | 'none';
    label: string;
    width?: number | 'full';
    height?: number;
    onClick: () => void;
    hasBorder?: boolean;
    children?: React.ReactNode;
  },
  React.ComponentProps<'button'>
>;

const Button = ({
  status,
  label,
  width = 'full',
  height = 40,
  onClick,
  hasBorder = false,
  borderType = 'primary',
  children,
  ...props
}: Props) => {
  return (
    <S.Button
      type={'button'}
      hasBorder={hasBorder}
      onClick={onClick}
      status={status}
      width={width}
      height={height}
      borderType={borderType}
      {...props}>
      <span>{label}</span>
      {children}
    </S.Button>
  );
};

export default Button;
