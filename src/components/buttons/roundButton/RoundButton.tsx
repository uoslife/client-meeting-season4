import * as S from './RoundButton.style';
import { Combine } from '~/types/utils.type';
import Text from '~/components/typography/Text';

export type RoundButtonProps = Combine<
  {
    status: 'active' | 'inactive' | 'disabled' | 'cancel';
    borderType?: 'primary' | 'black' | 'gray' | 'none';
    label?: string;
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
  width = 'full',
  height = 56,
  onClick,
  hasBorder = false,
  borderType = 'primary',
  children,
  ...props
}: RoundButtonProps) => {
  const handleTextColor = (status: RoundButtonProps['status']) => {
    switch (status) {
      case 'active':
        return 'White';
      case 'inactive':
        return 'Primary500';
      case 'disabled':
        return 'White';
      case 'cancel':
        return 'Secondary800';
      default:
        return 'Primary500';
    }
  };
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
      {label && (
        <Text
          label={label}
          color={handleTextColor(status)}
          typography={status === 'disabled' ? 'NeoButtonS' : 'NeoButtonL'}
        />
      )}
      {children}
    </S.Button>
  );
};

export default RoundButton;
