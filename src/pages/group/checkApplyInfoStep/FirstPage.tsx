// TODO: Replace with actual data

import CardConnector from '~/components/card/connectedTwoCards/CardConnector';
import CheckApplyInfo from '~/components/applyInfo/ApplyInfo';
import {
  DirectoryItemViewType,
  DirectoryStyledInfoListProps,
} from '~/components/applyInfo/DirectoryStyledInfoList';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import { GroupProfileProps } from '~/components/applyInfo/GroupProfile';
// import useGroupEntireValue from '~/hooks/useGroupEntireValue';

const useProfileProps = (): GroupProfileProps => {
  // const { info_age, info_gender, info_height, info_name } =
  //   useGroupEntireValue();

  return {
    genderAndAgeLabel: 'TEMP',
    groupNameLabel: 'TEMP',
    otherLabels: [{ name: '키', content: 'TEMP' }],
  };
};

const useTopCardListProps = (): DirectoryStyledInfoListProps => {
  const items: DirectoryItemViewType[] = [
    { name: 'Q&A. 분위기', content: 'asdfafds' },
    { name: 'Q&A. 미팅', content: 'adsfadfs' },
    { name: 'Q&A. 술', content: 'adsadsfad' },
    { name: 'Q&A. 미팅 동기', content: 'meIntafsdasdfadsferestsContent' },
  ];

  return { items };
};

const useBottomCardListProps = (): DirectoryStyledInfoListProps => {
  const items: DirectoryItemViewType[] = [
    { name: '나이', content: `TEMP` },
    { name: '선호 대학', content: '경희대, 한국외대' },
    { name: '분위기', content: '둘다 싫어요!' },
  ];

  return { items };
};

const TopCard = () => {
  const profileProps = useProfileProps();
  const listProps = useTopCardListProps();

  return (
    <CheckApplyInfo.StyledCard>
      <Col gap={20}>
        <Col gap={12}>
          <Text
            color="Secondary900"
            label="우리 팅 정보"
            typography="NeoTitleM"
          />
          <CheckApplyInfo.GroupProfile {...profileProps} />
        </Col>
        <CheckApplyInfo.List {...listProps} />
      </Col>
    </CheckApplyInfo.StyledCard>
  );
};

const BottomCard = () => {
  const listProps = useBottomCardListProps();

  return (
    <CheckApplyInfo.StyledCard>
      <Col gap={12}>
        <Text color="Secondary900" label="선호 사항" typography="NeoTitleM" />
        <CheckApplyInfo.List {...listProps} />
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
