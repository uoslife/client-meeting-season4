import { useAtomValue, useSetAtom } from 'jotai';
import { commonDataAtoms } from '~/models/common/data';
import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import { pageFinishAtom } from '~/models/funnel';
import { MeetingInfo } from '~/utils/meetingInfo';
import { useClientTempData } from './temp';
import CheckPageDoubleCards, {
  CheckPageDoubleCardsProps,
} from '~/components/applyInfo/CheckPageDoubleCards';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';

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
        const {
          data: { data },
        } = await MeetingAPI.getMeetingInfo(
          meetingType === 'group' ? 'TRIPLE' : 'SINGLE',
        );

        const convertedUiData = new MeetingInfo(data).getCheckApplyInfoUiData();
        setMeetingInfoState(convertedUiData);

        setIsPageFinished(true);
      } catch (error) {
        console.log({ error });
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
      label="신청 정보를 확인해줘"
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

  const data = useClientTempData(meetingType!);

  // const data = useData(meetingType!);

  // // TODO: 대신 보여줄 UI 확정 후 수정
  // if (data === 'error') return null;
  // if (data === 'loading') return null;

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
