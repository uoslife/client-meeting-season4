import { css } from '@emotion/react';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Text from '~/components/typography/Text';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <Paddler
      top={36}
      right={20}
      bottom={24}
      left={20}
      css={css`
        height: 100%;
        justify-content: space-between;
      `}>
      <Col gap={20} align="center">
        <img src="\images\common\finish-apply-step-img.png" alt="" />
        <Text
          label={
            '신청이 완료되었습니다. \n' + '매칭 결과가 나오면 알려드릴게요!'
          }
          color="Secondary900"
          typography="NeoTitleM"
          css={css`
            text-align: center;
          `}
        />
        <Col gap={8} align="center">
          <Text
            label={'11/1 목요일 저녁, \n' + '시대생 어플로 알림을 보내드려요.'}
            color="Secondary800"
            typography="GoThicTitleS"
            css={css`
              text-align: center;
            `}
          />
          <Text
            label="(신청 취소 기한 : 5월 31일 오후 10시까지)"
            color="Primary500"
            typography="GoThicLabelS"
          />
        </Col>
      </Col>

      <RoundButton
        status="active"
        label="신청 정보 확인하기"
        borderType="gray"
        onClick={() => {
          navigate('/');
        }} // TODO: path 정해지면 수정하기
      >
        <img src="\images\icons\next-icon-white.svg" alt="next_icon" />
      </RoundButton>
    </Paddler>
  );
};

export default FirstPage;
