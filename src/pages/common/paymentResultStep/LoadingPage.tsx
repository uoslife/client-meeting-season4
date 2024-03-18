import Text from '~/components/typography/Text';
import Col from '~/components/layout/Col';

const LoadingPayment = () => {
  return (
    <Col align={'center'} gap={20} padding={'40px 20px'}>
      <Text
        label={'결제 중입니다...'}
        color={'Gray500'}
        typography={'NeoTitleM'}
      />
      <picture>
        <img
          alt={''}
          src={'/images/uoslifeLogo-loadingSpinner.webp'}
          width={255}
          height={140}
        />
      </picture>
      <Text
        label={'우㈃ㅣ의 ㅁビ남을 ブlㄷŀ리는 ㅅㅣᥐビ ....'}
        color={'Gray500'}
        typography={'GoThicBodyS'}
      />
    </Col>
  );
};

export default LoadingPayment;
