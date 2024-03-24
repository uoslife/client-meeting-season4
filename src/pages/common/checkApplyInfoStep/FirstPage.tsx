import { useAtomValue, useSetAtom } from 'jotai';
import { commonDataAtoms } from '~/models/common/data';
import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import { pageFinishAtom } from '~/models/funnel';
import { CheckApplyInfoCardsProps } from '~/components/applyInfo/CheckCards';
import { MeetingInfo } from '~/utils/meetingInfo';
import { useClientTempData } from './temp';

// production에서 사용할 훅
const useServerData = (meetingType: 'personal' | 'group') => {
  const [meetingInfoState, setMeetingInfoState] = useState<
    CheckApplyInfoCardsProps | 'loading' | 'error'
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

const FirstPage = () => {
  const { meetingType } = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );

  const cardState = useClientTempData(meetingType!);

  // const cardState = useServerData(meetingType!);

  // // TODO: 대신 보여줄 UI 확정 후 수정
  // if (cardState === 'error') return null;
  // if (cardState === 'loading') return null;

  return (
    <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0 80px">
      <Paddler left={5} right={5} top={24}>
        <Col gap={16}>
          <ApplyInfo.CheckPageTopSaying />
          <ApplyInfo.CheckCards {...cardState} />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
