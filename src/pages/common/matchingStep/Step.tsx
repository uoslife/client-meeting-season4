import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import MatchingFailedContent from '~/components/applyInfo/MatchingFailedContent';
import MatchingSuccessfulContent, {
  MatchingSuccessfulContentProps,
} from '~/components/applyInfo/MatchingSuccessfulContent';
import PageLayout from '~/components/layout/page/PageLayout';
import { MatchingSuccessfulResultInfo } from '~/utils/meetingInfo/result';

const useData = () => {
  const [meetingInfoState, setMeetingInfoState] = useState<
    MatchingSuccessfulContentProps | 'loading' | 'error'
  >('loading');
  useEffect(() => {
    let timer: number;
    MeetingAPI.getMatchingInfo()
      .then(res => {
        const convertedUiData = new MatchingSuccessfulResultInfo(
          res.data,
        ).getUiData();
        timer = setTimeout(() => {
          setMeetingInfoState(convertedUiData);
        }, 1500);
      })
      .catch(() => {
        setMeetingInfoState('error');
      });

    return () => clearTimeout(timer);
  }, []);

  return meetingInfoState;
};

const CommonMatchingStep = () => {
  const data = useData();

  if (data === 'error') return <MatchingFailedContent />;
  if (data === 'loading')
    return (
      <PageLayout>
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

  return <MatchingSuccessfulContent {...data} />;
};

export default CommonMatchingStep;
