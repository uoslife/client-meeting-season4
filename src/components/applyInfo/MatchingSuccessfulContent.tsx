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

export type MatchingSuccessfulContentProps = {
  username: string;
  kakaoIds: string[];
  message: string;
  profileViewData: ProfileViewData;
  directoryViewItems: DirectoryViewItemType[];
};

const Congraturation = () => (
  <img src={'/images/icons/congraturation.png'} alt="" />
);

const TopSayings = ({ username }: { username: string }) => (
  <Col align="center">
    <Row justify="center">
      <Congraturation />
      <Text
        color="Primary500"
        label={`${username} 님,`}
        typography="NeoTitleM"
      />
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
      onClick={() => alert('TEMP')}
      status="active"
      label="시대팅 안내 사항 보러가기"
    />
  </Paddler>
);

const Heart = () => <img src={'/images/icons/heart_pixel.png'} alt="" />;

const KakaoIdBox = ({ kakaoIds }: { kakaoIds: string[] }) => (
  <S.DescriptionBox>
    <Row align="center">
      <Row gap={4}>
        <Heart />
        <Text
          color="Gray500"
          label="상대의 카카오톡 ID"
          typography="GoThicTitleS"
        />
      </Row>
      {kakaoIds.map(kakaoId => (
        <Row gap={8} justify="flex-end" align="center">
          <Text
            color="Primary500"
            key={kakaoId}
            label={kakaoId}
            typography="GoThicTitleS"
          />
          <S.CopyButton
            onClick={() => {
              console.log('TEMP');
            }}>
            <Text color="White" label="복사" typography="NeoButtonS" />
          </S.CopyButton>
        </Row>
      ))}
    </Row>
  </S.DescriptionBox>
);

const MessageBox = ({ message }: { message: string }) => (
  <S.DescriptionBox>
    <Paddler top={4} bottom={4}>
      <Col gap={8}>
        <Row gap={4}>
          <Heart />
          <Text
            color="Gray500"
            label="상대의 메세지"
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
  message,
  profileViewData,
}: Pick<
  MatchingSuccessfulContentProps,
  'directoryViewItems' | 'kakaoIds' | 'message' | 'profileViewData'
>) => {
  return (
    <S.InnerCardContainer>
      <Col gap={20}>
        <Col gap={12}>
          <KakaoIdBox kakaoIds={kakaoIds} />
          <MessageBox message={message} />
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
  username,
}: MatchingSuccessfulContentProps) => {
  return (
    <PageLayout>
      <PageLayout.Header title={'매칭 성공'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding="8px 4px" theme="BG_GREY">
        <Paddler top={24} bottom={24}>
          <Col align="center" gap={16}>
            <TopSayings username={username} />
            <InnerCard
              {...{ directoryViewItems, kakaoIds, message, profileViewData }}
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
