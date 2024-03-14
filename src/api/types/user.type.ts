export type SpiritAnimalType = (
  | 'DOG'
  | 'CAT'
  | 'RABBIT'
  | 'FOX'
  | 'BEAR'
  | 'HAMSTER'
  | 'MONKEY'
  | 'DINOSAUR'
  | 'CHICK'
)[];

export type InterestType = (
  | 'BOOK'
  | 'EXERCISE'
  | 'GAME'
  | 'TRAVEL'
  | 'ANIMAL'
  | 'MUSIC'
  | 'DRAWING'
  | 'MOVIE_DRAMA'
  | 'FASHION'
  | 'COOKING'
)[];

export type ReligionType =
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
  spiritAnimal: SpiritAnimalType;
  mbti: string[];
  interest: InterestType;
};

export type UpdateUserRequest = {
  name: string;
  age: number;
  gender: 'MALE' | 'FEMALE';
  height: number;
  phoneNumber: string;
  kakaoTalkId: string;
  department: string;
  studentType: 'UNDERGRADUATE' | 'POSTGRADUATE' | 'GRADUATE';
  religion?: ReligionType;

  smoking?: 'TRUE' | 'FALSE' | 'NOT_MATTER';
  drinkingMin?: number;
  drinkingMax?: number;
  spiritAnimal?: SpiritAnimalType;
  mbti?: string[];
  interest?: InterestType;
};

export type UpdatePreferRequest = {
  ageMin: number;
  ageMax: number;
  heightMin?: number;
  heightMax?: number;
  studentType?: ('UNDERGRADUATE' | 'POSTGRADUATE' | 'GRADUATE')[];
  university: ('UOS' | 'KHU' | 'HUFS')[];
  religion?: ReligionType;
  smoking?: ('TRUE' | 'FALSE' | 'NOT_MATTER')[];
  spiritAnimal?: SpiritAnimalType;
  mbti?: string[];
  mood?: 'ACTIVE' | 'CALM' | 'NOT_MATTER';
};

export type UpdateInfoRequest = {
  question1?: object;
  question2?: number;
  question3?: number;
  question4?: number;
  question5?: number;
};

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

export type GetMeetingInfoResponse = {
  teamType: TeamType;
  teamName?: string;
} & GetUserResponse &
  UpdateInfoRequest &
  UpdatePreferRequest;
