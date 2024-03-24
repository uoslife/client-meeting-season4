import { useAtomValue } from 'jotai';
import { CheckApplyInfoCardsProps } from '~/components/applyInfo/CheckCards';
import { commonDataAtoms } from '~/models/common/data';
import { groupDataAtoms } from '~/models/group/data';
import { personalDataAtoms } from '~/models/personal/data';
import {
  getAgeAndHeightPreferenceLabel,
  getQnaLabel,
  getSmokingAndDrinkPreferLabel,
  getUnivPreferLabel,
  getUniversityLabel,
} from '~/utils/meetingInfo/label-getters';

// 포트원 심사를 위해 임시로 사용할, client-state를 조합하여 미리보기 데이터를 반환하는 훅
export const useClientTempData = (
  meetingType: 'personal' | 'group',
): CheckApplyInfoCardsProps => {
  const personalData = useClientPersonal();
  const groupData = useClientGroup();

  return meetingType === 'personal' ? personalData : groupData;
};

const useClientPersonal = (): CheckApplyInfoCardsProps => {
  const { univType } = useAtomValue(
    commonDataAtoms.commonUnivVerificationStep.page1,
  );
  const { age, gender, height, name } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page1,
  );
  const { kakaoId, major, studentType } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page2,
  );
  const { drinkRange, smoking } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page3,
  );
  const { animalOptions } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page4,
  );
  const { mbti } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page5,
  );
  const { interestOptions } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page6,
  );
  const { message } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page7,
  );
  const { answer: a1 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page1,
  );
  const { answer: a2 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page2,
  );
  const { answer: a3 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page3,
  );
  const { answer: a4 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page4,
  );
  const { answer: a5 } = useAtomValue(
    personalDataAtoms.personalMyRomanceStep.page5,
  );
  const {
    ageRange: agePreferRange,
    heightRange: heightPreferRange,
    studentTypes: studentPrefers,
  } = useAtomValue(personalDataAtoms.personalPreferInfoStep.page1);
  const {
    drinkRange: drinkPreferRange,
    smoking: smokingPrefer,
    univs: univPrefers,
  } = useAtomValue(personalDataAtoms.personalPreferInfoStep.page2);
  const { animalOptions: animalPrefers } = useAtomValue(
    personalDataAtoms.personalPreferInfoStep.page3,
  );
  const { mbtis: mbtiPrefers } = useAtomValue(
    personalDataAtoms.personalPreferInfoStep.page4,
  );

  return {
    topCardProps: {
      cardTopLabel: '내 정보',
      profileViewData: {
        univ: univType!,
        genderAndAgeLabel: `(${gender === 'M' ? '♂️' : '♀️'}), ${age}세`,
        meetingType: 'personal',
        nameLabel: name,
        otherInfoItems: [
          { name: '키', content: `${height}cm` },
          { name: '학교', content: getUniversityLabel(univType!) },
          { name: '학과', content: major },
          {
            name: '신분',
            content: studentType!,
          },
          { name: '카카오톡 ID', content: kakaoId },
        ],
      },
      directoryViewItems: [
        { name: '흡연 여부', content: smoking! },
        {
          name: '음주 횟수',
          content: `1딜에 ${drinkRange[0]}~${drinkRange[1]}회`,
        },
        {
          name: '동물상 및 MBTI',
          content: `${animalOptions
            .map(
              item =>
                ({
                  dog: '개',
                  cat: '고양이',
                  rabbit: '토끼',
                  hamster: '햄스터',
                  bear: '곰',
                  dinosaur: '공룡',
                  chick: '병아리',
                  fox: '여우',
                  monkey: '원숭이',
                })[item],
            )
            .join(', ')} / ${mbti}`,
        },
        {
          name: '관심사',
          content: interestOptions
            .map(
              item =>
                ({
                  reading: '독서',
                  game: '게임',
                  exercise: '운동',
                  traveling: '여행',
                  animal: '동물',
                  music: '음악',
                  drawing: '그림',
                  movie_drama: '영화/드라마',
                  fashion: '패션',
                  cooking: '요리',
                })[item],
            )
            .join(', '),
        },
        {
          name: '나의 메세지',
          content: message,
        },
        {
          name: 'Q&A. 연애 스타일',
          content: getQnaLabel('SINGLE', 0, a1!),
        },
        {
          name: 'Q&A. 데이트',
          content: getQnaLabel('SINGLE', 1, a2!),
        },
        {
          name: 'Q&A. 화해 방법',
          content: getQnaLabel('SINGLE', 2, a3!),
        },
        {
          name: 'Q&A. 연락 빈도',
          content: getQnaLabel('SINGLE', 3, a4!),
        },
        {
          name: 'Q&A. 표현 방법',
          content: getQnaLabel('SINGLE', 4, a5!),
        },
      ],
    },
    bottomCardProps: {
      directoryViewItems: [
        {
          name: '나이 / 키',
          content: getAgeAndHeightPreferenceLabel({
            ageMin: agePreferRange[0],
            ageMax: agePreferRange[1],
            heightMin: heightPreferRange[0],
            heightMax: heightPreferRange[1],
          }),
        },
        {
          name: '신분',
          content: studentPrefers.join(', '),
        },
        {
          name: '선호 대학',
          content: getUnivPreferLabel(univPrefers),
        },
        {
          name: '흡연 여부 / 음주 횟수',
          content: getSmokingAndDrinkPreferLabel({
            drinkingMin: drinkPreferRange[0],
            drinkingMax: drinkPreferRange[1],
            smoking: (
              {
                흡연: 'TRUE',
                비흡연: 'FALSE',
                '상관 없어요!': 'NOT_MATTER',
              } as const
            )[smokingPrefer!],
          }),
        },
        {
          name: '동물상 및 MBTI',
          content: `${animalPrefers
            .map(
              item =>
                ({
                  dog: '개',
                  cat: '고양이',
                  rabbit: '토끼',
                  hamster: '햄스터',
                  bear: '곰',
                  dinosaur: '공룡',
                  chick: '병아리',
                  fox: '여우',
                  monkey: '원숭이',
                })[item],
            )
            .join(', ')} / ${mbtiPrefers}`,
        },
      ],
    },
  };
};

const useClientGroup = (): CheckApplyInfoCardsProps => {
  const { univType } = useAtomValue(
    commonDataAtoms.commonUnivVerificationStep.page1,
  );
  const { age, gender, name } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page1,
  );
  const { kakaoId, major, studentType } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page2,
  );
  const { preferDayOptions } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page1,
  );
  const { answer: a1 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page2,
  );
  const { answer: a2 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page3,
  );
  const { answer: a3 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page4,
  );
  const { answer: a4 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page5,
  );
  const { message } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page6,
  );
  const {
    ageRange: agePrefer,
    atmosphere: moodPrefer,
    univs: univPrefer,
  } = useAtomValue(groupDataAtoms.groupLeaderPreferStep.page1);

  return {
    topCardProps: {
      cardTopLabel: '우리팅 정보',
      profileViewData: {
        genderAndAgeLabel: `(${gender === 'M' ? '♂️' : '♀️'}), ${age}세`,
        meetingType: 'group',
        nameLabel: name,
        otherInfoItems: [
          { name: '학교', content: getUniversityLabel(univType!) },
          { name: '학과', content: major },
          {
            name: '신분',
            content: `${studentType!}, ${studentType!}, ${studentType!}`,
          },
          { name: '선호 요일', content: preferDayOptions.join(', ') },
          {
            name: '카카오톡 ID',
            content: `${kakaoId}, ${kakaoId}, ${kakaoId}`,
          },
        ],
      },
      directoryViewItems: [
        {
          name: 'Q&A. 분위기',
          content: getQnaLabel('TRIPLE', 1, a1!),
        },
        {
          name: 'Q&A. 미팅',
          content: getQnaLabel('TRIPLE', 2, a2!),
        },
        {
          name: 'Q&A. 술',
          content: getQnaLabel('TRIPLE', 3, a3!),
        },
        {
          name: 'Q&A. 미팅 동기',
          content: getQnaLabel('TRIPLE', 4, a4!),
        },
        { name: '우리의 메세지', content: message },
      ],
    },
    bottomCardProps: {
      directoryViewItems: [
        {
          name: '나이',
          content: `${agePrefer[0]}세 ~ ${agePrefer[1]}세`,
        },
        {
          name: '선호 대학',
          content: univPrefer.map(getUniversityLabel).join(', '),
        },
        { name: '분위기', content: moodPrefer },
      ],
    },
  };
};
