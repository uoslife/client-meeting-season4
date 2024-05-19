import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import CheckPageDoubleCards, {
  CheckPageDoubleCardsProps,
} from '~/components/applyInfo/CheckPageDoubleCards';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { MeetingInfo } from '~/utils/meetingInfo';
import { css } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { commonDataAtoms } from '~/models/common/data';

const useData = (meetingType: 'personal' | 'group') => {
  const [meetingInfoState, setMeetingInfoState] = useState<
    CheckPageDoubleCardsProps | 'loading' | 'error'
  >('loading');

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const { data } = await MeetingAPI.getMeetingInfo(
          meetingType === 'group' ? 'TRIPLE' : 'SINGLE',
        );

        const convertedUiData = new MeetingInfo(data).getCheckApplyInfoUiData();
        setMeetingInfoState(convertedUiData);
      } catch (error) {
        setMeetingInfoState('error');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [meetingType]);

  return meetingInfoState;
};

const BottomSayingsAndCancelButton = () => {
  const navigate = useTypeSafeNavigate();

  return (
    <Col gap={8}>
      <Col align="center">
        <Text
          label={
            '참여에 문제가 생겼다면, \n' +
            '기한 내에 신청 취소를 눌러주세요. \n' +
            '(신청 취소 기한 : n월 n일 오후 nn시까지)'
          }
          color="Gray500"
          typography="GoThicBodyS"
        />
      </Col>
      <Paddler left={20} right={20}>
        <Col gap={8}>
          <RoundButton
            status="active"
            borderType="black"
            label=""
            onClick={() => navigate('/')}>
            <Text
              label="홈 화면으로 가기"
              color="White"
              typography="NeoButtonL"
            />
            <img
              color="white"
              src="\images\icons\next-icon-white.svg"
              alt="arrowLeft"
            />
          </RoundButton>
          <RoundButton
            status="inactive"
            borderType="black"
            label=""
            onClick={() => navigate('/common/cancelStep')}>
            <Text
              label="신청 취소하기"
              color="Gray500"
              typography="NeoButtonL"
            />
            <img
              color="black"
              src="\images\icons\next-icon-black.svg"
              alt="arrowLeft"
            />
          </RoundButton>
        </Col>
      </Paddler>
    </Col>
  );
};

const CheckAfterAlreadyAppliedStep = () => {
  const { meetingType } = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );
  const cardState = useData(meetingType!);

  console.log('asd');

  const navigate = useTypeSafeNavigate();

  if (cardState === 'error') {
    navigate('/');
    return null;
  }
  if (cardState === 'loading')
    return (
      <PageLayout>
        <PageLayout.Header title="신청 정보" />
        <PageLayout.SingleCardBody theme="BG_WHITE" cardPadding="8px 0">
          <div
            css={css`
              width: 100%;
              height: 80%;
              display: flex;
              justify-content: center;
              align-items: center;
            `}>
            <img
              alt={''}
              src="/images/uoslifeLogo-loadingSpinner.webp"
              width={320}
              height={200}
            />
          </div>
        </PageLayout.SingleCardBody>
      </PageLayout>
    );

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보" showErrorButton={false} />
      <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0">
        <Paddler left={5} right={5} bottom={20}>
          <Col gap={44} align="center">
            <CheckPageDoubleCards {...cardState} />
            <BottomSayingsAndCancelButton />
          </Col>
        </Paddler>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CheckAfterAlreadyAppliedStep;
