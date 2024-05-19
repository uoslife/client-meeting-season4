import { useAtomValue, useSetAtom } from 'jotai';
import { commonDataAtoms } from '~/models/common/data';
import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import { pageFinishAtom } from '~/models/funnel';
import { MeetingInfo } from '~/utils/meetingInfo';
import CheckPageDoubleCards, {
  CheckPageDoubleCardsProps,
} from '~/components/applyInfo/CheckPageDoubleCards';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';

// production에서 사용할 훅
const useData = (meetingType: 'personal' | 'group') => {
  const [meetingInfoState, setMeetingInfoState] = useState<
    CheckPageDoubleCardsProps | 'loading' | 'error'
  >('loading');

  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setIsPageFinished(false);

    const timer = setTimeout(async () => {
      try {
        const { data } = await MeetingAPI.getMeetingInfo(
          meetingType === 'group' ? 'TRIPLE' : 'SINGLE',
        );

        const convertedUiData = new MeetingInfo(data).getCheckApplyInfoUiData();
        setMeetingInfoState(convertedUiData);

        setIsPageFinished(true);
      } catch (error) {
        setMeetingInfoState('error');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [meetingType, setIsPageFinished]);

  return meetingInfoState;
};

const TopSayings = () => (
  <Col gap={4} align="center">
    <Text
      color="Primary500"
      label="신청 정보를 확인해주세요."
      typography="NeoTitleM"
    />
    <Text
      color="Secondary800"
      label="신청 완료 후에는 수정이 불가해요."
      typography="GoThicBodyS"
    />
  </Col>
);

const FirstPage = () => {
  const { meetingType } = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );

  // const data = useClientTempData(meetingType!);

  const data = useData(meetingType!);

  if (data === 'error') return null;
  if (data === 'loading')
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
    <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0 80px">
      <Paddler left={5} right={5} top={24}>
        <Col gap={16}>
          <TopSayings />
          <CheckPageDoubleCards {...data} />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
