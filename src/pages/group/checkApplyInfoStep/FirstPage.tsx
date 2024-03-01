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
    { name: 'Q&A. 분위기', content: 'asdfafds' },
    { name: 'Q&A. 미팅', content: 'adsfadfs' },
    { name: 'Q&A. 술', content: 'adsadsfad' },
    { name: 'Q&A. 미팅 동기', content: 'meIntafsdasdfadsferestsContent' },
  ];

  return (
    <CheckApplyInfo.StyledCard>
      <Col gap={20}>
        <Col gap={12}>
          <Text
            color="Secondary900"
            label="우리 팅 정보"
            typography="NeoTitleM"
          />
          <CheckApplyInfo.GroupProfile
            genderAndAgeLabel="TEMP"
            groupNameLabel="TEMP"
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
    { name: '나이', content: `TEMP` },
    { name: '선호 대학', content: '경희대, 한국외대' },
    { name: '분위기', content: '둘다 싫어요!' },
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
