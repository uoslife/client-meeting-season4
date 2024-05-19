import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import Col from '~/components/layout/Col';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { useNavigate } from 'react-router-dom';

const SuccessPayment = () => {
  const navigate = useNavigate();
  return (
    <Col
      align={'center'}
      justify={'space-between'}
      padding={'36px 20px'}
      css={css`
        height: 100%;
      `}>
      <Col align={'center'} gap={20}>
        <picture>
          <img
            alt={'success'}
            src={'/images/aplication-sucess.png'}
            width={370}
            height={230}
          />
        </picture>
        <Text
          label={
            '신청이 완료되었습니다.\n' + '매칭 결과가 나오면 알려드릴게요!'
          }
          color={'Secondary900'}
          typography={'NeoTitleM'}
          css={css`
            text-align: center;
          `}
        />
        <Col align={'center'} gap={8}>
          <Col align={'center'}>
            <Text
              label={'05/25 토요일 저녁,'}
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
            label={'(신청 취소 기한 : 5월 22일 23시 59분까지)'}
            color={'Primary500'}
            typography={'GoThicLabelS'}
          />
        </Col>
      </Col>
      <RoundButton
        status={'active'}
        label={'홈으로 이동하기'}
        onClick={() => navigate('/')}
      />
    </Col>
  );
};

export default SuccessPayment;
