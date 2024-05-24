import styled from '@emotion/styled';
import DirectoryViewInfoList, {
  DirectoryViewItemType,
} from './DirectoryViewInfoList';
import ApplyInfoProfile, { ProfileViewData } from './ApplyInfoProfile';
import Row from '../layout/Row';
import Text from '../typography/Text';
import Paddler from '../layout/Pad';
import Col from '../layout/Col';
import { colors } from '~/styles/colors';
import PageLayout from '../layout/page/PageLayout';
import RoundButton from '../buttons/roundButton/RoundButton';
import IconButton from '../buttons/iconButton/IconButton';
import toast from 'react-hot-toast';

export type MatchingSuccessfulContentProps = {
  myName: string;
  kakaoIds: string[];
  usernames?: string[];
  message: string;
  profileViewData: ProfileViewData;
  directoryViewItems: DirectoryViewItemType[];
  meetingType: 'SINGLE' | 'TRIPLE';
};

const Congraturation = () => (
  <img src={'/images/icons/congraturation.png'} alt="" />
);

const TopSayings = ({ myName }: { myName: string }) => (
  <Col align="center">
    <Row justify="center">
      <Congraturation />
      <Text color="Primary500" label={`${myName} 님,`} typography="NeoTitleM" />
    </Row>
    <Text
      color="Primary500"
      label="성공적으로 매칭되었어요!"
      typography="NeoTitleM"
    />
  </Col>
);

const BottomPaddingAndButton = () => (
  <Paddler right={20} left={20}>
    <RoundButton
      onClick={() =>
        window.open(
          'https://uoslife.notion.site/4-9f7c5cf2509c49389e57d9abafade98a',
        )
      }
      status="active"
      label="시대팅 안내 사항 보러가기"
    />
  </Paddler>
);

const Heart = () => <img src={'/images/icons/heart_pixel.png'} alt="" />;

const KakaoProfileBox = ({
  kakaoIds,
  usernames,
  meetingType,
}: Pick<
  MatchingSuccessfulContentProps,
  'kakaoIds' | 'usernames' | 'meetingType'
>) => {
  return (
    <S.DescriptionBox>
      <Paddler top={10} bottom={10}>
        {meetingType === 'SINGLE' ? (
          <Row justify="space-between" align="center">
            <Row align="center" gap={4}>
              <Heart />
              <Text
                color="Gray500"
                label={'상대의 카카오톡 ID'}
                typography="GoThicTitleS"
              />
            </Row>
            <Row align="center" justify="flex-end" gap={8}>
              <Text
                color="Primary500"
                key={kakaoIds[0]}
                label={kakaoIds[0]}
                typography="GoThicTitleS"
              />
              <S.CopyButton
                onClick={() => {
                  window.navigator.clipboard
                    .writeText(kakaoIds[0])
                    .then(() =>
                      toast.success('복사되었습니다: ' + kakaoIds[0]),
                    );
                }}>
                <Text color="White" label="복사" typography="NeoButtonS" />
              </S.CopyButton>
            </Row>
          </Row>
        ) : (
          <Col gap={12}>
            <Paddler top={4} bottom={4}>
              <Row gap={4}>
                <Heart />
                <Text
                  color="Gray500"
                  label={'상대 팅의 카카오톡 ID'}
                  typography="GoThicTitleS"
                />
              </Row>
            </Paddler>
            {kakaoIds.map((kakaoId, index) => (
              <Row gap={8} justify="space-between" align="center">
                <Row align="center" justify="flex-start" gap={8}>
                  <IconButton
                    iconName={'human-circle'}
                    width={20}
                    height={20}
                  />
                  <Text
                    color="Gray500"
                    label={usernames![index]}
                    typography="GoThicBodyS"
                  />
                </Row>
                <Row align="center" justify="flex-end" gap={8}>
                  <Text
                    color="Primary500"
                    key={kakaoId}
                    label={kakaoId}
                    typography="GoThicTitleS"
                  />
                  <S.CopyButton
                    onClick={() =>
                      window.navigator.clipboard
                        .writeText(kakaoId)
                        .then(() => toast.success('복사되었습니다: ' + kakaoId))
                    }>
                    <Text color="White" label="복사" typography="NeoButtonS" />
                  </S.CopyButton>
                </Row>
              </Row>
            ))}
          </Col>
        )}
      </Paddler>
    </S.DescriptionBox>
  );
};
const MessageBox = ({
  message,
  meetingType,
}: Pick<MatchingSuccessfulContentProps, 'message' | 'meetingType'>) => (
  <S.DescriptionBox>
    <Paddler top={4} bottom={4}>
      <Col gap={8}>
        <Row gap={4}>
          <Heart />
          <Text
            color="Gray500"
            label={
              meetingType === 'SINGLE' ? '상대의 메세지' : '상대 팅의 메세지'
            }
            typography="GoThicTitleS"
          />
        </Row>
        <Text label={message} color="Primary500" typography="GoThicTitleS" />
      </Col>
    </Paddler>
  </S.DescriptionBox>
);

const InnerCard = ({
  directoryViewItems,
  kakaoIds,
  usernames,
  message,
  profileViewData,
  meetingType,
}: Pick<
  MatchingSuccessfulContentProps,
  | 'directoryViewItems'
  | 'kakaoIds'
  | 'usernames'
  | 'message'
  | 'profileViewData'
  | 'meetingType'
>) => {
  return (
    <S.InnerCardContainer>
      <Col gap={20}>
        <Col gap={12}>
          <KakaoProfileBox
            meetingType={meetingType}
            kakaoIds={kakaoIds}
            usernames={usernames}
          />
          <MessageBox message={message} meetingType={meetingType} />
          <ApplyInfoProfile {...profileViewData} />
        </Col>
        <DirectoryViewInfoList items={directoryViewItems} />
      </Col>
    </S.InnerCardContainer>
  );
};

const MatchingSuccessfulContent = ({
  directoryViewItems,
  kakaoIds,
  message,
  profileViewData,
  myName,
  usernames,
  meetingType,
}: MatchingSuccessfulContentProps) => {
  return (
    <PageLayout>
      <PageLayout.Header title={'매칭 성공'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding="8px 4px" theme="BG_GREY">
        <Paddler top={24} bottom={24}>
          <Col align="center" gap={16}>
            <TopSayings myName={myName} />
            <InnerCard
              {...{
                directoryViewItems,
                kakaoIds,
                message,
                profileViewData,
                meetingType,
                usernames,
              }}
            />
            <BottomPaddingAndButton />
          </Col>
        </Paddler>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default MatchingSuccessfulContent;

const S = {
  InnerCardContainer: styled.div`
    width: 100%;
    padding: 32px 20px 24px 20px;
    border-radius: 21px;
    border: 1px solid ${colors.Gray200};
    background: ${colors.White};
    height: 100%;
  `,
  DescriptionBox: styled.div`
    padding: 8px 20px;
    width: 100%;
    background: ${colors.Gray000};
    border-radius: 7px;
    border: 1px solid ${colors.Gray200};
  `,
  CopyButton: styled.button`
    border-radius: 10px;
    border: 0.5px solid ${colors.Gray500};
    background: ${colors.Primary500};
    padding: 0 6px;
  `,
};
