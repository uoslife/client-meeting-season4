import * as S from './MbtiButton.style';
import Text from '~/components/typography/Text';

export type MbtiButtonProps = {
  status: 'active' | 'inactive';
  alphabet: string;
  label: string;
  width?: number | 'full';
  height?: number;
  onClick: () => void;
  children?: React.ReactNode;
};

const MbtiButton = ({
  status,
  alphabet,
  label,
  width = 'full',
  height = 56,
  onClick,
  children,
  ...props
}: MbtiButtonProps) => {
  return (
    <S.Button
      type={'button'}
      status={status}
      width={width}
      height={height}
      onClick={onClick}
      {...props}>
      <Text
        label={alphabet}
        color={status === 'active' ? 'White' : 'Primary500'}
        typography={'NeoButtonL'}
        size={36}
      />
      <Text
        label={label}
        color={status === 'active' ? 'White' : 'Primary500'}
        typography={'NeoButtonL'}
        size={16}
      />
      {children}
    </S.Button>
  );
};

export default MbtiButton;
