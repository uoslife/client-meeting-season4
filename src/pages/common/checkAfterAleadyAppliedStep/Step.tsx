import { css } from '@emotion/react';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';

const BottomSayingsAndCancelButton = ({
  onClickCancleButton,
}: {
  onClickCancleButton: () => void;
}) => (
  <Col gap={8}>
    <Col align="center">
      <Text
        css={css`
          text-align: center;
        `}
        label="참여에 문제가 생겼다면, 기한 내에 신청 취소를 눌러주세요."
        color="Gray500"
        typography="GoThicBodyS"
      />
      <Text
        label="(신청 취소 기한 : n월 n일 오후 nn시까지)"
        color="Gray500"
        typography="GoThicBodyS"
      />
    </Col>
    <Paddler left={20} right={20}>
      <RoundButton
        status="inactive"
        borderType="black"
        label=""
        onClick={onClickCancleButton}>
        <Text label="신청 취소" color="Gray500" typography="NeoButtonL" />
        <img
          color="black"
          src="\images\icons\next-icon-black.svg"
          alt="arrowLeft"
        />
      </RoundButton>
    </Paddler>
  </Col>
);

const CheckAfterAleadyAppliedStep = () => {
  // TODO: 아래 주석 해제하고 API로 교체

  // const navigate = useNavigate();

  // // 저장된 정보가 없다면 인증 페이지로 리다이렉트
  // if (!savedViewInfo) {
  //   // TODO: 인증 페이지로 수정
  //   navigate('/common/verifyForCheckAfterAleadyAppliedStep');
  // return null;
  // }

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보" />
      <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0">
        <Paddler left={5} right={5} bottom={20}>
          <Col gap={44} align="center">
            <BottomSayingsAndCancelButton onClickCancleButton={() => {}} />
          </Col>
        </Paddler>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CheckAfterAleadyAppliedStep;
