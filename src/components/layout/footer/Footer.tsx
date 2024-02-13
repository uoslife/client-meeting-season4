import IconButton from '~/components/buttons/iconButton/IconButton';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';

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
    <Row justify={'space-between'} align={'center'}>
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
    </Row>
  );
};

export default Footer;
