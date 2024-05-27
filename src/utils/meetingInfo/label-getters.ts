import {
  GenderType,
  InterestOption,
  ReligionOption,
  SmokingOption,
  SpiritAnimalOption,
  StudentOption,
  TeamType,
} from '~/api/types/user.type';
import {
  ANIMAL_MAP,
  ATMOSPHERE_MAP,
  GROUP_ANSWER_OPTIONS,
  PERSONAL_ANSWER_OPTIONS,
  RELIGON_MAP,
  SMOKING_MAP,
  STUDENT_TYPE_MAP,
  UNIV_MAP,
} from './constants';
import { getSortedMbtiArray } from './mbti';
import { Univ } from '~/models/options';

export const getReligionLabel = (religion: ReligionOption) =>
  RELIGON_MAP[religion];

export const getReligionPreferLabel = (religions: ReligionOption[]) =>
  religions.map(item => RELIGON_MAP[item]).join(', ');

export const getGenderAndAgeLabel = ({
  teamType,
  gender,
  age,
}: {
  teamType: TeamType;
  gender: GenderType;
  age: number;
}) => {
  const genderMark = gender === 'MALE' ? '♂️' : '♀️';
  const postfix = teamType === 'TRIPLE' ? '(평균 나이)' : '';

  return `(${genderMark}), ${age}세${postfix}`;
};

export const getMyHeightLabel = (height: number) => `${height}cm`;

export const getSmokingLabel = (smoking: SmokingOption) => SMOKING_MAP[smoking];

export const getDrinkLabel = (min: number, max: number) =>
  `한 달에 ${min}~${max}회`;

export const getAnimalAndMbtiPreferLabel = (
  animals: SpiritAnimalOption[],
  mbti: string,
) => {
  const animalLabel = animals.map(item => ANIMAL_MAP[item]).join(', ');
  const mbtiLabel = getSortedMbtiArray(mbti).join(', ');

  return `${animalLabel} / ${mbtiLabel}`;
};

export const getAnimalAndMbtiLabel = (
  animals: SpiritAnimalOption[],
  mbti: string,
) => {
  const animalLabel = animals.map(item => ANIMAL_MAP[item]).join(', ');

  return `${animalLabel} / ${mbti}`;
};

export const getStudentTypeLabel = (studentType: StudentOption) =>
  STUDENT_TYPE_MAP[studentType];

export const getStudentPreferLabel = (studentTypes: StudentOption[]) =>
  studentTypes.map(item => STUDENT_TYPE_MAP[item]).join(', ');

export const getInterestsLabel = (interests: InterestOption[]) =>
  interests
    .map(
      item =>
        ({
          BOOK: '독서',
          EXERCISE: '운동',
          GAME: '게임',
          TRAVEL: '여행',
          ANIMAL: '동물',
          MUSIC: '음악',
          DRAWING: '그림',
          MOVIE_DRAMA: '영화/드라마',
          FASHION: '패션',
          COOKING: '요리',
        })[item],
    )
    .join(', ');

export const getAgeAndHeightPreferenceLabel = ({
  ageMax,
  ageMin,
  heightMax,
  heightMin,
}: {
  ageMin: number;
  ageMax: number;
  heightMin: number;
  heightMax: number;
}) => `${ageMin}-${ageMax} / ${heightMin}-${heightMax}`;

export const getUnivPreferLabel = (univs: Univ[]) =>
  univs.map(item => UNIV_MAP[item]).join(', ');

export const getSmokingAndDrinkPreferLabel = ({
  drinkingMax,
  drinkingMin,
  smoking,
}: {
  smoking: SmokingOption;
  drinkingMin: number;
  drinkingMax: number;
}) => `${SMOKING_MAP[smoking]} / 1달에 ${drinkingMin}~${drinkingMax}회`;

export const getDepartmentsLabel = (departments: string) => departments;

export const getHeightMyInfoLabel = (height: number) => `${height}cm`;

export const getProfileUniversityLabel = (university: Univ) =>
  UNIV_MAP[university];

export const getQnaLabel = (
  type: TeamType,
  questionIndex: number,
  selection: number,
) => {
  const answerOptions =
    type === 'SINGLE' ? PERSONAL_ANSWER_OPTIONS : GROUP_ANSWER_OPTIONS;

  return answerOptions[questionIndex][selection];
};

export const getProfileDepartMentsLabel = (departments: string[]) =>
  departments.join(', ');

export const getUniversityLabel = (university: Univ) => UNIV_MAP[university];

export const getCommaJoinedLabel = (items: string[]) => items.join(', ');

export const getAtmosphereLabel = (
  atmosphere: 'ACTIVE' | 'CALM' | 'NOT_MATTER',
) => ATMOSPHERE_MAP[atmosphere];

export const getAgeRangeLabel = (ageMin: number, ageMax: number) =>
  `${ageMin}-${ageMax}`;
