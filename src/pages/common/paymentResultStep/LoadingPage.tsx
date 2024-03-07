import Text from '~/components/typography/Text';
import Col from '~/components/layout/Col';
import IconButton from '~/components/buttons/iconButton/IconButton';

const LoadingPayment = () => {
  return (
    <Col align={'center'} gap={20} padding={'40px 20px'}>
      <IconButton iconName={'payment-loading'} width={150} height={150} />
      <Col align={'center'} gap={4}>
        <Text
          label={'내가 너 좀 사랑하면 안되냐?!'}
          color={'Secondary900'}
          typography={'NeoTitleM'}
        />
        <Text
          label={'-시대생 일동-'}
          color={'Gray300'}
          typography={'GoThicTitleS'}
        />
      </Col>
    </Col>
  );
};

export default LoadingPayment;
