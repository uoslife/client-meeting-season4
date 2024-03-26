import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import MatchingSuccessfulContent, {
  MatchingSuccessfulContentProps,
} from '~/components/applyInfo/MatchingSuccessfulContent';
import { MeetingInfo } from '~/utils/meetingInfo';

const useData = () => {
  const [meetingInfoState, setMeetingInfoState] = useState<
    MatchingSuccessfulContentProps | 'loading' | 'error'
  >('loading');

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const {
          data: { data },
        } = await MeetingAPI.getMatchingInfo();

        const convertedUiData = new MeetingInfo(data).getMatchingInfoUiData();
        setMeetingInfoState(convertedUiData);
      } catch (error) {
        console.log({ error });
        setMeetingInfoState('error');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return meetingInfoState;
};

const CommonMatchingStep = () => {
  const data = useData();

  if (data === 'error') return '에러';
  if (data === 'loading') return '로딩';

  return <MatchingSuccessfulContent {...data} />;
};

export default CommonMatchingStep;
