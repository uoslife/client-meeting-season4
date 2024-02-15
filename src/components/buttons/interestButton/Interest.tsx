import * as S from './Interest.style';
import IconButton from '../iconButton/IconButton';
import Text from '~/components/typography/Text';
import { interestKeyType } from '~/types/icon.type';

export type InterestButtonProps = {
  label: string;
  isActive: boolean;
  interestType: interestKeyType;
  onMouseDown?: () => void;
};

const InterestButton = ({
  label,
  isActive,
  interestType,
  onMouseDown,
}: InterestButtonProps) => {
  return (
    <S.Container onMouseDown={onMouseDown}>
      <S.ImageWrapper isActive={isActive}>
        <IconButton
          iconName={`interests/${interestType}`}
          format="png"
          style={{ filter: isActive ? 'brightness(100)' : 'none' }}
        />
      </S.ImageWrapper>
      <Text
        label={label}
        color={'Gray400'}
        typography={'NeoBodyS'} //글씨체 확인
        weight={400}
        size={14}
      />
    </S.Container>
  );
};

export default InterestButton;
