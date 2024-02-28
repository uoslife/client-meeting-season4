import IconButton from '~/components/buttons/iconButton/IconButton';
import Text from '~/components/typography/Text';
import { colorType } from '~/types/style.type';
import S from './Footer.style';
import { useAtomValue } from 'jotai/index';
import { pageFinishAtom } from '~/store/funnel';

export type FooterPropsType = {
  totalPage: number;
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  borderExceptTop?: string;
  borderBottomRadius?: number;
  outerPadding?: string;
  innerPadding?: string;
  backgroundColorName?: colorType;
};

const Footer = ({
  totalPage,
  currentPage,
  onPrev,
  onNext,
  borderBottomRadius = 0,
  borderExceptTop,
  outerPadding = '15px 29px',
  innerPadding = '24px 20px',
  backgroundColorName = 'White',
}: FooterPropsType) => {
  const isPageFinished = useAtomValue(pageFinishAtom);

  return (
    <S.Outer outerPadding={outerPadding}>
      <S.Inner
        borderExceptTop={borderExceptTop}
        borderBottomRadius={borderBottomRadius}
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
        {isPageFinished ? (
          <IconButton iconName={'footerButton-able'} onClick={onNext} />
        ) : (
          <IconButton iconName={'footerButton-disabled'} />
        )}
      </S.Inner>
    </S.Outer>
  );
};

export default Footer;
