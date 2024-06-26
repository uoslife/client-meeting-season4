import { GetMatchingInfoResponse } from '~/api/types/user.type';

const DUMMY_API_MOCK_SINGLE: GetMatchingInfoResponse = {
  myName: '임어진',
  opponnentUserInformation: {
    teamName: 'mock-유저이름',
    teamType: 'SINGLE',
    gender: 'MALE',
    leaderProfile: {
      phoneNumber: '010-2939-3923',
      name: '이루매',
      age: 24,
      religion: 'ETC',
      university: 'UOS',
      department: '경제학과',
      studentType: 'UNDERGRADUATE',
      kakaoTalkId: 'kakaoId',
      smoking: 'TRUE',
      drinkingMin: 0,
      drinkingMax: 10,
      spiritAnimal: ['DOG'],
      mbti: 'ISFP',
      interest: ['BOOK'],
      height: 155.7,
    },
    information: {
      gender: 'FEMALE',
      questions: [0, 0, 0, 0, 0],
    },
    message: '안뇽안뇽안뇽안뇽안뇽안뇽안뇽안뇽',
  },
};

const DUMMY_API_MOCK_TEAM: GetMatchingInfoResponse = {
  myName: '어진아 군대 잘가',
  opponnentUserInformation: {
    teamName: 'mock-팀이름',
    teamType: 'TRIPLE',
    gender: 'MALE',
    leaderProfile: {
      phoneNumber: '010-2939-3923',
      name: '이루매',
      age: 24,
      religion: 'ETC',
      university: 'UOS',
      department: '경제학과',
      studentType: 'UNDERGRADUATE',
      kakaoTalkId: 'kakaoId',
      smoking: 'TRUE',
      drinkingMin: 10,
      drinkingMax: 130,
      spiritAnimal: ['DOG'],
      mbti: 'ISFP',
      interest: ['BOOK'],
      height: 155.7,
    },
    information: {
      gender: 'MALE',
      questions: [255, 0, 0, 0, 0],
    },
    message: 'mock-message',
  },
};

export { DUMMY_API_MOCK_TEAM, DUMMY_API_MOCK_SINGLE };
