import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
// import usePersonalEntireValue from '~/hooks/usePersonalEntireValue';
// import useGroupEntireValue from '~/hooks/useGroupEntireValue';
import { useAtomValue } from 'jotai';
import { meetingTypeAtom, univTypeAtom } from '~/store/meeting';
import { ApplyInfoCustomDoubleCardProps } from '~/components/applyInfo/CustomDoubleCard';
import RawIntoViewConverters from '~/utils/RawIntoViewConverters';
import {
  GroupInfoRawDataType,
  PersonalInfoRawDataType,
} from '~/utils/RawIntoViewConverters/types/info.type';
import {
  GroupPreferRawDataType,
  PersonalPreferRawDataType,
} from '~/utils/RawIntoViewConverters/types/prefer.type';

const usePersonal = (): ApplyInfoCustomDoubleCardProps => {
  // TODO: Replace mocks with personalEntireValue
  // const personalEntireValue = usePersonalEntireValue();
  const mockPersonalInfoRawData: PersonalInfoRawDataType = {
    myInfo_age: 25,
    myInfo_gender: 'Male',
    myInfo_height: 180,
    myInfo_major: 'Computer Science',
    myInfo_studentType: 'Undergraduate',
    myInfo_kakaoId: 'john_doe',
    myInfo_nickname: 'John',
    personalInfo_smoking: 'No',
    personalInfo_drink: ['Occasionally'],
    personalInfo_interests: ['Coding', 'Reading'],
    personalInfo_animal: ['Dog'],
    personalInfo_mbti: ['INTJ'],
    personalInfo_question: Array.from({ length: 5 }, (_, i) => ({
      label: `Answer ${i + 1}`,
      order: i,
    })),
    univ: 'HUFS',
  };
  const univ = useAtomValue(univTypeAtom)!;

  const { directoryViewItems: topCardItems, profileViewData } =
    RawIntoViewConverters.personalInfo(
      { ...mockPersonalInfoRawData, univ },
      { profileItemsIncludeKakaoId: true },
    );

  const mockPersonalPreferRawData: PersonalPreferRawDataType = {
    personalPrefer_age: ['20-25'],
    personalPrefer_height: ['175-180'],
    personalPrefer_studentType: ['Undergraduate'],
    personalPrefer_univ: ['HUFS'],
    personalPrefer_drink: ['Occasionally'],
    personalPrefer_smoking: 'No',
    personalPrefer_animal: ['Dog'],
    personalPrefer_mbti: ['INTJ'],
  };
  const { directoryViewItems: bottomCardItems } =
    RawIntoViewConverters.personalPrefer(mockPersonalPreferRawData);

  return {
    topCardProps: {
      cardTopLabel: '내 정보',
      directoryViewItems: topCardItems,
      profileViewData,
    },
    bottomCardProps: {
      directoryViewItems: bottomCardItems,
    },
  };
};

const useGroup = (): ApplyInfoCustomDoubleCardProps => {
  // TODO: Replace mocks with groupEntireValue
  // const groupEntireValue = useGroupEntireValue();
  const univ = useAtomValue(univTypeAtom)!;

  const mockGroupInfoRawData: GroupInfoRawDataType = {
    groupInfo_name: 'John',
    groupInfo_preferDay: ['Weekend'],
    myInfo_age: 25,
    myInfo_gender: '남자',
    myInfo_height: 180,
    myInfo_kakaoId: 'john_doe',
    myInfo_major: 'Computer Science',
    myInfo_nickname: 'John',
    myInfo_studentType: 'Undergraduate',
    groupInfo_question: Array.from({ length: 5 }, (_, i) => ({
      label: `Answer ${i + 1}`,
      order: i,
    })),
    univ: 'HUFS',
  };

  const mockGroupPreferRawData: GroupPreferRawDataType = {
    groupPrefer_age: ['20-25'],
    groupPrefer_atmosphere: 'quiet',
    groupPrefer_univ: ['HUFS'],
  };

  const { directoryViewItems: topCardItems, profileViewData } =
    RawIntoViewConverters.groupInfo(
      { ...mockGroupInfoRawData, univ },
      {
        profileItemsIncludeKakaoId: true,
      },
    );

  const { directoryViewItems: bottomCardItems } =
    RawIntoViewConverters.groupPrefer(mockGroupPreferRawData);

  return {
    topCardProps: {
      directoryViewItems: topCardItems,
      cardTopLabel: '우리 팅 정보',
      profileViewData,
    },
    bottomCardProps: {
      directoryViewItems: bottomCardItems,
    },
  };
};

const FirstPage = () => {
  const meetingType = useAtomValue(meetingTypeAtom)!;
  const ApplyInfoCustomDoubleCardProps = {
    personal: usePersonal(),
    group: useGroup(),
  }[meetingType];

  return (
    <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0 80px">
      <Paddler left={5} right={5} top={24}>
        <Col gap={16}>
          <ApplyInfo.CheckPageTopSaying />
          <ApplyInfo.CustomDoubleCard {...ApplyInfoCustomDoubleCardProps} />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
