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
import { PersonalProfileProps } from '~/components/applyInfo/PersonalProfile';
import usePersonalEntireValue from '~/hooks/usePersonalEntireValue';
import { useAtomValue } from 'jotai';
import { univTypeAtom } from '~/store/meeting';
import { ProfileInfoItemType } from '~/components/applyInfo/ProfileInfoItems';

const useProfileProps = (): PersonalProfileProps => {
  const {
    info_gender,
    info_height,
    info_major,
    info_studentType,
    info_kakaoId,
    info_nickname,
    info_age,
  } = usePersonalEntireValue();
  const univValue = useAtomValue(univTypeAtom)!;

  const genderMark = info_gender === '여자' ? '♀' : '♂';

  const heightLabel = `${info_height}cm`;
  const univLabel = {
    HUFS: '한국외대',
    KHU: '경희대',
    UOS: '서울시립대',
  }[univValue];
  const majorLabel = info_major;
  const studentTypeLabel = info_studentType;
  const kakaoIdLabel = info_kakaoId;

  const nicknameLabel = info_nickname;

  const genderAndAgeLabel = `(${genderMark}), ${info_age}세`;

  const otherLabels: ProfileInfoItemType[] = [
    { name: '키', content: heightLabel },
    { name: '학교', content: univLabel },
    { name: '학과', content: majorLabel },
    { name: '신분', content: studentTypeLabel },
    { name: '카카오톡 ID', content: kakaoIdLabel },
  ];

  return {
    nicknameLabel,
    genderAndAgeLabel,
    otherLabels,
  };
};

const useTopCardListProps = (): DirectoryStyledInfoListProps => {
  // TODO: Replace with actual data
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

  return { items };
};

const TopCard = () => {
  const profileProps = useProfileProps();
  const listProps = useTopCardListProps();

  return (
    <CheckApplyInfo.StyledCard>
      <Col gap={20}>
        <Col gap={12}>
          <Text color="Secondary900" label="내 정보" typography="NeoTitleM" />
          <CheckApplyInfo.PersonalProfile {...profileProps} />
        </Col>
        <CheckApplyInfo.List {...listProps} />
      </Col>
    </CheckApplyInfo.StyledCard>
  );
};

const useBottomCardListProps = (): DirectoryStyledInfoListProps => {
  // TODO: Replace with actual data
  const items: DirectoryItemViewType[] = [
    { name: '나이 / 키', content: `TEMP` },
    { name: '신분', content: 'TEMP' },
    { name: '선호 대학', content: 'TEMP' },
    { name: '흡연 여부 / 음주 횟수', content: 'TEMP' },
    { name: '동물상 및 MBTI', content: 'TEMP' },
  ];

  return { items };
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
