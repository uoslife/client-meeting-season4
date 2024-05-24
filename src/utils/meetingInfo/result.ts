import {
  GenderType,
  GetMatchingInfoResponse,
  TeamType,
  UserProfileType,
} from '~/api/types/user.type';
import { MatchingSuccessfulContentProps } from '~/components/applyInfo/MatchingSuccessfulContent';
import { Univ } from '~/models/options';
import {
  getAnimalAndMbtiLabel,
  getCommaJoinedLabel,
  getDepartmentsLabel,
  getDrinkLabel,
  getGenderAndAgeLabel,
  getHeightMyInfoLabel,
  getInterestsLabel,
  getProfileUniversityLabel,
  getQnaLabel,
  getReligionLabel,
  getSmokingLabel,
  getStudentTypeLabel,
  getUniversityLabel,
} from './label-getters';
import { day_binaryIntoDayArray } from './day';

export class MatchingSuccessfulResultInfo {
  private myName: string;
  private teamType: TeamType;
  private gender: GenderType;
  private teamName: string;
  private age: number;
  private teamUserList: UserProfileType[];
  private questions: number[];
  private message: string;
  private univ: Univ;
  private departments: string[];

  constructor({
    myName,
    opponnentUserInformation: {
      gender,
      information,
      message,
      teamName,
      teamType,
      teamUserList,
    },
  }: GetMatchingInfoResponse) {
    this.myName = myName;
    this.teamType = teamType;
    this.gender = gender;
    this.questions = information.questions;
    this.message = message;
    this.teamName = teamName;
    this.teamUserList = teamUserList;
    this.age =
      teamUserList.reduce((acc, cur) => acc + cur.age, 0) / teamUserList.length;
    this.univ = teamUserList[0].university!;
    this.departments = teamUserList.map(user => user.department);
  }

  getUiData = (): MatchingSuccessfulContentProps => {
    const {
      teamUserList,
      message,
      teamName,
      univ,
      age,
      gender,
      teamType,
      questions,
      departments,
      myName,
    } = this;

    if (teamType === 'SINGLE') {
      const {
        studentType,
        smoking,
        drinkingMax,
        drinkingMin,
        height,
        interest,
        mbti,
        spiritAnimal,
        religion,
      } = teamUserList[0];

      return {
        meetingType: 'SINGLE',
        myName,
        message,
        profileViewData: {
          univ,
          genderAndAgeLabel: getGenderAndAgeLabel({
            age,
            gender,
            teamType,
          }),
          meetingType: 'personal',
          nameLabel: teamName,
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
          ],
        },
        directoryViewItems: [
          {
            name: '음주 횟수',
            content: getDrinkLabel(drinkingMin!, drinkingMax!),
          },
          {
            name: '종교',
            content: getReligionLabel(religion!),
          },
          {
            name: '흡연 여부',
            content: getSmokingLabel(smoking!),
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
        kakaoIds: teamUserList.map(({ kakaoTalkId }) => kakaoTalkId),
      };
    } else {
      return {
        meetingType: 'TRIPLE',
        myName,
        message,
        profileViewData: {
          univ,
          genderAndAgeLabel: getGenderAndAgeLabel({
            age,
            gender,
            teamType,
          }),
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
                teamUserList.map(user => getStudentTypeLabel(user.studentType)),
              ),
            },
            {
              name: '선호 요일',
              content: getCommaJoinedLabel(
                day_binaryIntoDayArray(questions[0]),
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
        ],
        kakaoIds: teamUserList.map(user => user.kakaoTalkId),
        usernames: teamUserList.map(user => user.name),
      };
    }
  };
}
