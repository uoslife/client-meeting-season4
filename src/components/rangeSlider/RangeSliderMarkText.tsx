import Text from '../typography/Text';
import S from './RangeSlider.style';

const RangeSliderMarkText = ({ label }: { label: string }) => {
  return (
    <S.MarkTextContainer>
      <Text label={label} color="Secondary800" typography="PretendardRegular" />
    </S.MarkTextContainer>
  );
};

export default RangeSliderMarkText;
