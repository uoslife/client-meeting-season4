import { Univ } from '~/models/options';

export type SpiritAnimalOption =
  | 'DOG'
  | 'CAT'
  | 'RABBIT'
  | 'FOX'
  | 'BEAR'
  | 'HAMSTER'
  | 'MONKEY'
  | 'DINOSAUR'
  | 'CHICK';

export type InterestOption =
  | 'BOOK'
  | 'EXERCISE'
  | 'GAME'
  | 'TRAVEL'
  | 'ANIMAL'
  | 'MUSIC'
  | 'DRAWING'
  | 'MOVIE_DRAMA'
  | 'FASHION'
  | 'COOKING';

export type ReligionOption =
  | 'CHRISTIAN'
  | 'CATHOLIC'
  | 'BUDDHISM'
  | 'NO_RELIGION'
  | 'ETC'
  | 'NO_MATTER';

export type TeamType = 'SINGLE' | 'TRIPLE';

export type GetUserResponse = {
  name: string;
  age: number;
  height: number;
  university: string;
  department: string;
  studentType: string;
  kakaoTalkId: string;
  smoking: string;
  drinkingMin: number;
  drinkingMax: number;
  spiritAnimal: SpiritAnimalOption[];
  mbti: string[];
  interest: InterestOption[];
};

export type UpdateUserRequest = {
  name: string;
  age: number;
  gender: 'MALE' | 'FEMALE';
  height: number | null;
  kakaoTalkId: string;
  department: string;
  studentType: StudentOption;
  phoneNumber: string | null;
  religion: ReligionOption | null;
  smoking: SmokingOption | null;
  drinkingMin: number | null;
  drinkingMax: number | null;
  spiritAnimal: SpiritAnimalOption[] | null;
  mbti: string | null;
  interest: InterestOption[] | null;

};

export type UpdateMessageRequest = {
  message: string | null;
};

export type UpdatePreferRequest = {
  ageMin: number;
  ageMax: number;
  heightMin: number | null;
  heightMax: number | null;
  drinkingMin: number | null;
  drinkingMax: number | null;
  studentType: StudentOption[] | null;
  university: ('UOS' | 'KHU' | 'HUFS')[];
  religion: ReligionOption[] | null;
  smoking: SmokingOption[] | null;
  spiritAnimal: SpiritAnimalOption[] | null;
  mbti: string | null;
  mood: 'ACTIVE' | 'CALM' | 'NOT_MATTER';
};

export type UpdateInfoRequest = { questions: number[] };

export type JoinGroupUserListResponse = {
  teamName: string;
  userList: Array<{
    name: string;
  }>;
};

export type GetGroupStatusResponse = {
  teamName: string;
  userList: Array<{
    name: string;
  }>;
};

// ------------------ //
// -- 03 / 17 추가 -- //
// ------------------ //
export type MoodOption = 'ACTIVE' | 'CALM' | 'NOT_MATTER';

export type SmokingOption = 'TRUE' | 'FALSE' | 'NOT_MATTER';

export type StudentOption = 'UNDERGRADUATE' | 'POSTGRADUATE' | 'GRADUATE';

export type UserProfileType = {
  // 1:1 / 3:3 전부에서 쓰이는 필드
  age: number;
  department: string;
  kakaoTalkId: string;
  name: string;
  studentType: StudentOption;
  height: number;
  university: Univ;
  phoneNumber: string;

  // 1:1에서만 쓰이는 필드
  smoking?: SmokingOption;
  religion?: ReligionOption;
  drinkingMin?: number;
  drinkingMax?: number;
  spiritAnimal?: SpiritAnimalOption[];
  mbti?: string;
  interest?: InterestOption[];
};

export type GenderType = 'MALE' | 'FEMALE';

export type InformationType = {
  gender: GenderType;
  questions: number[];
};

export type PreferenceType = {
  ageMin: number;
  ageMax: number;
  heightMin: number;
  heightMax: number;
  drinkingMin?: number;
  drinkingMax?: number;
  studentType: StudentOption[];
  university: Univ[];
  religion: ReligionOption[];
  smoking: SmokingOption;
  spiritAnimal: SpiritAnimalOption[];
  mbti: string;
  mood: MoodOption;
};

export type GetMeetingInfoResponse = {
  myName: string;
  teamType: TeamType;
  gender: GenderType;
  teamName: string;
  teamUserList: UserProfileType[];
  information: InformationType;
  preference: PreferenceType;
  message: string;
};
