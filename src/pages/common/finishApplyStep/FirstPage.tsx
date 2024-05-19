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
        <Col gap={8} align="center">
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
          <Text
            label="매칭 완료 이후에는 신청 취소가 불가합니다."
            color="Gray300"
            typography="NeoLabel"
          />
        </Col>
        <Col gap={8} align="center">
          <Text
            label={
              '5월 25일 토요일 저녁, \n' + '시대생 어플로 알림을 보내드려요.'
            }
            color="Secondary800"
            typography="GoThicTitleS"
            css={css`
              text-align: center;
            `}
          />
          <Text
            label="(신청 취소 기한 : 5월 22일 23시 59분까지)"
            color="Primary500"
            typography="GoThicLabelS"
          />
        </Col>
      </Col>

      <RoundButton
        status="active"
        label="홈으로 가기"
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
