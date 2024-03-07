import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import Col from '~/components/layout/Col';

const SuccessPayment = () => {
  return (
    <Col align={'center'} gap={20} padding={'36px 20px'}>
      <picture>
        <img
          alt={'success'}
          src={'/images/aplication-sucess.png'}
          width={370}
          height={230}
        />
      </picture>
      <Text
        label={'신청이 완료되었습니다.\n' + '매칭 결과가 나오면 알려드릴게요!'}
        color={'Secondary900'}
        typography={'NeoTitleM'}
        css={css`
          text-align: center;
        `}
      />
      <Col align={'center'} gap={8}>
        <Col align={'center'}>
          <Text
            label={'11/1 목요일 저녁,'}
            color={'Secondary900'}
            typography={'GoThicTitleS'}
          />
          <Text
            label={'시대생 어플로 알림을 보내드려요.'}
            color={'Gray300'}
            typography={'GoThicTitleS'}
          />
        </Col>
        <Text
          label={'(신청 취소 기한 : 5월 31일 오후 10시까지'}
          color={'Primary500'}
          typography={'GoThicLabelS'}
        />
      </Col>
    </Col>
  );
};

export default SuccessPayment;
