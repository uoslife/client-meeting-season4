import * as S from './RoundButton.style';
import { Combine } from '~/types/utils.type';
import Text from '~/components/typography/Text';
import { colorType, typographyType } from '~/types/style.type';

export type RoundButtonProps = Combine<
  {
    status: 'active' | 'inactive' | 'disabled' | 'cancel';
    borderType?: 'primary' | 'black' | 'gray' | 'none';
    label: string;
    textColor: colorType;
    textTypography: typographyType;
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
  textColor,
  textTypography,
  width = 'full',
  height = 56,
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
      width={width}
      height={height}
      borderType={borderType}
      {...props}>
      <Text label={label} color={textColor} typography={textTypography} />
      {children}
    </S.Button>
  );
};

export default RoundButton;
