import { css } from '@emotion/react';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import { colors } from '~/styles/colors';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Text from '~/components/typography/Text';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';

const NotFoundPage = () => {
  const navigate = useTypeSafeNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div
      css={css`
        height: 100dvh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${colors.White};
      `}>
      <Paddler top={80} right={30} bottom={30} left={30}>
        <Col gap={36} align="center">
          <img src="\images\not-found.png" alt="" />
          <Col gap={12} align="center">
            <Text
              label={'페이지를 찾을 수 없어요.'}
              color={'Black'}
              typography={'NeoTitleM'}
            />
            <Text
              label={
                '찾으려는 페이지의 주소가 잘못 입력되었거나, \n' +
                '주소가 변경 또는 삭제되었어요. \n' +
                '페이지의 주소를 정확히 입력했는지 다시 확인해주세요.'
              }
              color={'Black'}
              typography={'GoThicBodyS'}
            />
          </Col>
          <RoundButton
            status={'active'}
            label={'시대생 홈으로 돌아가기'}
            onClick={handleGoHome}
            borderType={'black'}>
            <img src="\images\icons\next-icon-white.svg" alt="" />
          </RoundButton>
        </Col>
      </Paddler>
    </div>
  );
};

export default NotFoundPage;
