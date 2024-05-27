// TODO: username 필드 response 형식 확정 후 수정

import {
  GenderType,
  GetMeetingInfoResponse,
  PreferenceType,
  TeamType,
  UserProfileType,
} from '~/api/types/user.type';
import { Univ } from '~/models/options';
import { day_binaryIntoDayArray } from './day';
import {
  getAgeAndHeightPreferenceLabel,
  getAnimalAndMbtiPreferLabel,
  getQnaLabel,
  getCommaJoinedLabel,
  getDepartmentsLabel,
  getDrinkLabel,
  getGenderAndAgeLabel,
  getHeightMyInfoLabel,
  getInterestsLabel,
  getProfileUniversityLabel,
  getSmokingAndDrinkPreferLabel,
  getSmokingLabel,
  getStudentPreferLabel,
  getStudentTypeLabel,
  getUnivPreferLabel,
  getUniversityLabel,
  getAtmosphereLabel,
  getAgeRangeLabel,
  getAnimalAndMbtiLabel,
  getReligionLabel,
  getReligionPreferLabel,
} from './label-getters';
import { CheckPageDoubleCardsProps } from '~/components/applyInfo/CheckPageDoubleCards';

// Convert API data to UI data
export class MeetingInfo {
  private teamType: TeamType;
  private gender: GenderType;
  private teamName: string;
  private age: number;
  private teamUserList: UserProfileType[];
  private questions: number[];
  private message: string;
  private preference: PreferenceType;
  private univ: Univ;
  private departments: string;

  constructor({
    gender,
    information,
    message,
    preference,
    teamName,
    teamType,
    teamUserList,
  }: GetMeetingInfoResponse) {
    this.teamType = teamType;
    this.gender = gender;
    this.questions = information.questions;
    this.message = message;
    this.preference = preference;
    this.teamName = teamName;
    this.teamUserList = teamUserList;
    this.age =
      teamUserList.reduce((acc, cur) => acc + cur.age, 0) / teamUserList.length;
    this.univ = teamUserList[0].university!;
    this.departments = teamUserList[0].department;
  }

  getCheckApplyInfoUiData = (): CheckPageDoubleCardsProps => {
    const {
      age,
      gender,
      teamType,
      teamName,
      message,
      questions,
      preference,
      teamUserList,
      departments,
      univ,
    } = this;
    const genderAndAgeLabel = getGenderAndAgeLabel({
      age,
      gender,
      teamType,
    });

    if (teamType === 'SINGLE') {
      const {
        studentType,
        smoking,
        drinkingMin,
        drinkingMax,
        kakaoTalkId,
        height,
        interest,
        mbti,
        spiritAnimal,
        religion,
        phoneNumber,
        name,
      } = teamUserList[0];

      return {
        topCardProps: {
          cardTopLabel: '내 정보',
          profileViewData: {
            univ,
            genderAndAgeLabel,
            meetingType: 'personal',
            nameLabel: name,
            otherInfoItems: [
              { name: '키', content: getHeightMyInfoLabel(height) },
              {
                name: '학교',
                content: getProfileUniversityLabel(univ),
              },
              { name: '학과', content: getDepartmentsLabel(departments) },
              {
                name: '신분',
                content: getStudentTypeLabel(studentType),
              },
              { name: '카카오톡 ID', content: kakaoTalkId },
              { name: '전화번호', content: phoneNumber },
            ],
          },
          directoryViewItems: [
            {
              name: '종교',
              content: getReligionLabel(religion!),
            },
            {
              name: '흡연 여부',
              content: getSmokingLabel(smoking!),
            },
            {
              name: '음주 횟수',
              content: getDrinkLabel(drinkingMin!, drinkingMax!),
            },
            {
              name: '동물상 및 MBTI',
              content: getAnimalAndMbtiLabel(spiritAnimal!, mbti!),
            },
            {
              name: '관심사',
              content: getInterestsLabel(interest!),
            },
            {
              name: '나의 메세지',
              content: message,
            },
            {
              name: 'Q&A. 연애 스타일',
              content: getQnaLabel('SINGLE', 0, questions[0]),
            },
            {
              name: 'Q&A. 데이트',
              content: getQnaLabel('SINGLE', 1, questions[1]),
            },
            {
              name: 'Q&A. 화해 방법',
              content: getQnaLabel('SINGLE', 2, questions[2]),
            },
            {
              name: 'Q&A. 연락 빈도',
              content: getQnaLabel('SINGLE', 3, questions[3]),
            },
            {
              name: 'Q&A. 표현 방법',
              content: getQnaLabel('SINGLE', 4, questions[4]),
            },
          ],
        },
        bottomCardProps: {
          directoryViewItems: [
            {
              name: '나이 / 키',
              content: getAgeAndHeightPreferenceLabel(preference),
            },
            {
              name: '신분',
              content: getStudentPreferLabel(preference.studentType),
            },
            {
              name: '선호 대학',
              content: getUnivPreferLabel(preference.university),
            },
            {
              name: '선호 종교',
              content: getReligionPreferLabel(preference.religion!),
            },
            {
              name: '흡연 여부 / 음주 횟수',
              content: getSmokingAndDrinkPreferLabel({
                drinkingMin: preference.drinkingMin!,
                drinkingMax: preference.drinkingMax!,
                smoking: preference.smoking!,
              }),
            },
            {
              name: '동물상 및 MBTI',
              content: getAnimalAndMbtiPreferLabel(
                preference.spiritAnimal,
                preference.mbti,
              ),
            },
          ],
        },
      };
    } else {
      const { preference } = this;

      return {
        topCardProps: {
          cardTopLabel: '팀 정보',
          profileViewData: {
            genderAndAgeLabel,
            meetingType: 'group',
            nameLabel: teamName,
            otherInfoItems: [
              {
                name: '학교',
                content: getUniversityLabel(univ),
              },
              {
                name: '학과',
                content: getCommaJoinedLabel(
                  teamUserList.map(user => user.department),
                ),
              },
              {
                name: '신분',
                content: getCommaJoinedLabel(
                  teamUserList.map(user =>
                    getStudentTypeLabel(user.studentType),
                  ),
                ),
              },
              {
                name: '선호 요일',
                content: getCommaJoinedLabel(
                  day_binaryIntoDayArray(questions[0]),
                ),
              },
              {
                name: '카카오톡 ID',
                content: getCommaJoinedLabel(
                  teamUserList.map(user => user.kakaoTalkId),
                ),
              },
            ],
          },
          directoryViewItems: [
            {
              name: 'Q&A. 분위기',
              content: getQnaLabel('TRIPLE', 1, questions[1]),
            },
            {
              name: 'Q&A. 미팅',
              content: getQnaLabel('TRIPLE', 2, questions[2]),
            },
            {
              name: 'Q&A. 술',
              content: getQnaLabel('TRIPLE', 3, questions[3]),
            },
            {
              name: 'Q&A. 미팅 동기',
              content: getQnaLabel('TRIPLE', 4, questions[4]),
            },
            { name: '우리의 메세지', content: message },
          ],
        },
        bottomCardProps: {
          directoryViewItems: [
            {
              name: '나이',
              content: getAgeRangeLabel(preference.ageMin, preference.ageMax),
            },
            {
              name: '선호 대학',
              content: getUnivPreferLabel(preference.university),
            },
            { name: '분위기', content: getAtmosphereLabel(preference.mood) },
          ],
        },
      };
    }
  };
}
