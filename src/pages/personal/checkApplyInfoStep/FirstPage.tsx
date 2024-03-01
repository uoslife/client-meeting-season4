import CardConnector from '~/components/card/connectedTwoCards/CardConnector';
import CheckApplyInfo from '~/components/applyInfo/ApplyInfo';
import { DirectoryItemViewType } from '~/components/applyInfo/DirectoryStyledInfoList';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import ApplyInfo from '~/components/applyInfo/ApplyInfo';

const TopCard = () => {
  // TODO: Replace with actual data using custom hook
  const items: DirectoryItemViewType[] = [
    { name: '흠연 여부', content: 'meSmokingContent' },
    { name: '음주 횟수', content: 'meDrinkContent' },
    { name: '동물상 및 MBTI', content: 'meAnimalAndMbtiContent' },
    { name: '관심사', content: 'meInterestsContent' },
    { name: 'Q&A. 연애 스타일', content: 'meQna1Content' },
    { name: 'Q&A. 데이트', content: 'qna2Content' },
    { name: 'Q&A. 화해 방법', content: 'qna3Content' },
    { name: 'Q&A. 연락 빈도', content: 'qna4Content' },
    { name: 'Q&A. 표현 방법', content: 'qna5Content' },
  ];

  return (
    <CheckApplyInfo.StyledCard>
      <Col gap={20}>
        <Col gap={12}>
          <Text color="Secondary900" label="내 정보" typography="NeoTitleM" />
          <CheckApplyInfo.PersonalProfile
            genderAndAgeLabel="TEMP"
            nicknameLabel="TEMP"
            otherLabels={[{ name: '키', content: 'TEMP' }]}
          />
        </Col>
        <CheckApplyInfo.List items={items} />
      </Col>
    </CheckApplyInfo.StyledCard>
  );
};

const BottomCard = () => {
  // TODO: Replace with actual data using custom hook
  const items: DirectoryItemViewType[] = [
    { name: '나이 / 키', content: `TEMP` },
    { name: '신분', content: 'TEMP' },
    { name: '선호 대학', content: 'TEMP' },
    { name: '흡연 여부 / 음주 횟수', content: 'TEMP' },
    { name: '동물상 및 MBTI', content: 'TEMP' },
  ];

  return (
    <CheckApplyInfo.StyledCard>
      <Col gap={12}>
        <Text color="Secondary900" label="선호 사항" typography="NeoTitleM" />
        <CheckApplyInfo.List items={items} />
      </Col>
    </CheckApplyInfo.StyledCard>
  );
};

const FirstPage = () => {
  return (
    <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0 80px">
      <Paddler left={5} right={5} top={24}>
        <Col gap={16}>
          <ApplyInfo.CheckPageTopSaying />
          <Col align="center">
            <TopCard />
            <CardConnector />
            <BottomCard />
          </Col>
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
