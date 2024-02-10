import * as S from './IconButton.style';
import { iconType } from '~/types/icon.type';

export type IconButtonProps = {
  iconName: iconType;
  width?: number;
  height?: number;
  rotate?: number;
  format?: 'svg' | 'png';
  onClick?: () => void;
} & React.ComponentProps<'button'>;

const IconButton = ({
  iconName,
  width,
  height,
  rotate = 0,
  onClick,
  format = 'svg',
  ...props
}: IconButtonProps) => {
  return (
    <S.Wrapper type="button" onClick={onClick} rotate={rotate} {...props}>
      <img
        alt={`${iconName} 버튼`}
        src={`/images/icons/${iconName}.${format}`}
        width={width}
        height={height}
      />
    </S.Wrapper>
  );
};
export default IconButton;
