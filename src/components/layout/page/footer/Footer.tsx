import IconButton from '~/components/buttons/iconButton/IconButton';
import Text from '~/components/typography/Text';
import { colorType } from '~/types/style.type';
import S from './Footer.style';

export type FooterPropsType = {
  totalPage: number;
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  isAbled?: boolean;
  horizontalBorder?: string;
  bottomBorderRadius?: number;
  outerPadding?: string;
  innerPadding?: string;
  backgroundColorName?: colorType;
};

const Footer = ({
  totalPage,
  currentPage,
  onPrev,
  onNext,
  isAbled,
  bottomBorderRadius = 0,
  horizontalBorder,
  outerPadding = '15px 29px',
  innerPadding = '24px 20px',
  backgroundColorName = 'White',
}: FooterPropsType) => {
  return (
    <S.Outer outerPadding={outerPadding}>
      <S.Inner
        horizontalBorder={horizontalBorder}
        bottomBorderRadius={bottomBorderRadius}
        innerPadding={innerPadding}
        backgroundColorName={backgroundColorName}>
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
        {isAbled ? (
          <IconButton iconName={'footerButton-able'} onClick={onNext} />
        ) : (
          <IconButton iconName={'footerButton-disabled'} />
        )}
      </S.Inner>
    </S.Outer>
  );
};

export default Footer;
