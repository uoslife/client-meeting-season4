import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import Col from '~/components/layout/Col';
import { colors } from '~/styles/colors';

type failedPaymentProps = {
  errorMessage?: string;
};
const FailPayment = ({ errorMessage }: failedPaymentProps) => {
  return (
    <Col align={'center'} gap={20} padding={'36px 20px'}>
      <Col align={'center'} gap={10}>
        <Text
          label={'결제를 할 수 없어요!'}
          color={'Secondary900'}
          typography={'NeoTitleM'}
        />
        <Text
          label={(errorMessage && `사유 : ${errorMessage}`) ?? ''}
          color={'Primary500'}
          typography={'NeoBodyL'}
        />
      </Col>
      <Col
        align={'center'}
        padding={'20px'}
        gap={10}
        css={css`
          border-radius: 6px;
          border: 1px solid ${colors.Gray200};
          background: ${colors.Gray000};
        `}>
        <div
          css={css`
            font-size: 35px;
          `}>
          🥲
        </div>
        <Text
          label={
            '다시 시도해도 실패하신다면\n' +
            '시대생 카카오채널로 문의주세요!\n' +
            '빠르게 처리해드리겠습니다.'
          }
          color={'Secondary900'}
          typography={'GoThicBodyS'}
          css={css`
            text-align: center;
          `}
        />
      </Col>
    </Col>
  );
};

export default FailPayment;
