import styled from '@emotion/styled';
import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import DirectoryViewInfoList from '~/components/applyInfo/DirectoryViewInfoList';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Row from '~/components/layout/Row';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import { colors } from '~/styles/colors';

const Heart = () => <img src={'/images/icons/heart_pixel.png'} alt="" />;

const Congraturation = () => (
  <img src={'/images/icons/congraturation.png'} alt="" />
);

const KakaoIdBox = ({ kakaoId }: { kakaoId: string }) => (
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
      <Row gap={8} justify="flex-end" align="center">
        <Text color="Primary500" label={kakaoId} typography="GoThicTitleS" />
        <S.CopyButton onClick={() => {}}>
          <Text color="White" label="복사" typography="NeoButtonS" />
        </S.CopyButton>
      </Row>
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

const TopSayings = () => (
  <Col align="center">
    <Row justify="center">
      <Congraturation />
      <Text color="Primary500" label="호랑이 님," typography="NeoTitleM" />
    </Row>
    <Text
      color="Primary500"
      label="성공적으로 매칭되었어요!"
      typography="NeoTitleM"
    />
  </Col>
);

const CommonMatchingSuccessfulStep = () => {
  return (
    <PageLayout>
      <PageLayout.Header title={'매칭 성공'} isProgress={false} />
      <PageLayout.SingleCardBody cardPadding="8px 4px" theme="BG_GREY">
        <Paddler top={24} bottom={24}>
          <Col align="center" gap={16}>
            <TopSayings />
            <S.InnerCard>
              <Col gap={20}>
                <Col gap={12}>
                  <KakaoIdBox kakaoId="uoslife" />
                  <MessageBox message={'저는 임어진을 좋아해요.'} />
                  <ApplyInfo.Profile
                    genderAndAgeLabel="부 23세"
                    meetingType="personal"
                    nameLabel="ㅁㅇㄹㄴ"
                    univ={'KHU'}
                    otherInfoItems={[
                      { name: '키', content: '155cm' },
                      { name: '학교', content: '한국외대' },
                      { name: '학과', content: '산업디자인학과' },
                      { name: '신분', content: '학부생' },
                    ]}
                  />
                </Col>
                <DirectoryViewInfoList
                  items={[
                    { name: '흡연 여부', content: '흡연' },
                    { name: '음주 횟수', content: '1달에 0회' },
                    { name: '동물상 및 MBTI', content: '고양이 / ENFJ' },
                    { name: '나의 메세지', content: '저는 임어진을 좋아해요.' },
                    { name: '관심사', content: '독서, 여행,운동' },
                    {
                      name: 'Q&A. 연애 스타일',
                      content: '편한 ㄴr의 연인,,, 친구같은 ㄴㅏ으1 연인,,,',
                    },
                    {
                      name: 'Q&A. 데이트',
                      content: 'ㅈi대 뽀ㄷH나는 곳에서 맛난거 먹ㅈㅑ',
                    },
                    {
                      name: 'Q&A. 화해 방법',
                      content: '나에게 시간을 조금만 줘 Honey,,,',
                    },
                    {
                      name: 'Q&A. 연락 빈도',
                      content: 'ㅅıㅅi콜콜 일상을 공유ㅎr고 싶ㅇㅓ',
                    },
                    {
                      name: 'Q&A. 표현 방법',
                      content: '말ㅎr지 않아도 내 ㅁㅏ음이 느껴지지 않ㅇr？',
                    },
                  ]}
                />
              </Col>
            </S.InnerCard>
            <Paddler right={20} left={20}>
              <RoundButton
                onClick={() => alert('TEMP')}
                status="active"
                label="시대팅 안내 사항 보러가기"
              />
            </Paddler>
          </Col>
        </Paddler>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CommonMatchingSuccessfulStep;

const S = {
  InnerCard: styled.div`
    width: 100%;
    padding: 32px 20px 24px 20px;
    border-radius: 21px;
    border: 1px solid var(--Gray-200, #b6b6b6);
    background: #fff;
    height: 100%;
  `,
  DescriptionBox: styled.div`
    padding: 8px 20px;
    width: 100%;
    background: #f5f5f5;
    border-radius: 7px;
    border: 1px solid #b6b6b6;
  `,
  CopyButton: styled.button`
    border-radius: 10px;
    border: 0.5px solid ${colors.Gray500};
    background: ${colors.Primary500};
    padding: 0 6px;
  `,
};
