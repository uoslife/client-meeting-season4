import IconButton from '~/components/buttons/iconButton/IconButton';
import Text from '~/components/typography/Text';
import * as S from './Footer.style';

export type FooterPropsType = {
  totalPage: number;
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  isDisabled?: boolean;
};

const Footer = ({
  totalPage,
  currentPage,
  onPrev,
  onNext,
  isDisabled,
}: FooterPropsType) => {
  return (
    <S.Wrapper>
      <IconButton
        iconName={'footerButton-able'}
        rotate={180}
        onClick={onPrev}
      />
      <Text
        label={`${currentPage} / ${totalPage}`}
        color={'Gray300'}
        typography={'PFLabelL'}
      />
      {isDisabled ? (
        <IconButton iconName={'footerButton-able'} onClick={onNext} />
      ) : (
        <IconButton iconName={'footerButton-disabled'} />
      )}
    </S.Wrapper>
  );
};

export default Footer;
