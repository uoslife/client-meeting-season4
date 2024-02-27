import * as S from './RoundButton.style';
import { Combine } from '~/types/utils.type';

export type RoundButtonProps = Combine<
  {
    status: 'active' | 'inactive' | 'disabled';
    label?: string;
    borderType?: 'primary' | 'black' | 'sky';
    width?: number | 'full';
    height?: number;
    onClick: () => void;
    hasBorder?: boolean;
    children?: React.ReactNode;
  },
  React.ComponentProps<'button'>
>;

const RoundButton = ({
  status,
  label,
  height = 56,
  width,
  onClick,
  hasBorder = false,
  borderType = 'primary',
  children,
  ...props
}: RoundButtonProps) => {
  return (
    <S.Button
      type={'button'}
      hasBorder={hasBorder}
      onClick={onClick}
      status={status}
      height={height}
      width={width}
      borderType={borderType}
      {...props}>
      <span>{label}</span>
      {children}
    </S.Button>
  );
};

export default RoundButton;
