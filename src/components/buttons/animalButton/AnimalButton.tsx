import * as S from './AnimalButton.style';
import IconButton from '../iconButton/IconButton';
import Text from '~/components/typography/Text';
import { animalKeyType } from '~/types/icon.type';

export type AnimalButtonProps = {
  label: string;
  isActive: boolean;
  animalType: animalKeyType;
  onMouseDown?: () => void;
};

const AnimalButton = ({
  label,
  isActive,
  animalType,
  onMouseDown,
}: AnimalButtonProps) => {
  return (
    <S.Container isActive={isActive} onMouseDown={onMouseDown}>
      <S.ImageWrapper>
        <IconButton
          iconName={'check'}
          width={28}
          height={28}
          format="svg"
          style={{
            display: isActive ? 'flex' : 'none',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 999,
          }}
        />
        <IconButton iconName={`animals/${animalType}`} format="png" />
      </S.ImageWrapper>
      <Text
        label={label}
        color={isActive ? 'Primary500' : 'Gray300'}
        typography={'NeoBodyS'} //글씨체 확인
        weight={400}
        size={14}
      />
    </S.Container>
  );
};

export default AnimalButton;
