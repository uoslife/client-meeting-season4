import { useFunnel } from '~/hooks/useFunnel';
import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { MeetingAPI } from '~/api';
import { useAtomValue, useSetAtom } from 'jotai';
import { personalDataAtoms } from '~/models/personal/data';
import { navigateNextStepAtom } from '~/models/funnel';
import { isLoggedInAtom } from '~/models/auth';
import { useEffect } from 'react';

const PAGE_NUMBER = [1, 2, 3, 4, 5, 6, 7];

const STUDENT_MAP = {
  학부생: 'UNDERGRADUATE',
  대학원생: 'POSTGRADUATE',
  졸업생: 'GRADUATE',
} as const;

const INTEREST_MAP = {
  reading: 'BOOK',
  game: 'GAME',
  exercise: 'EXERCISE',
  traveling: 'TRAVEL',
  animal: 'ANIMAL',
  music: 'MUSIC',
  drawing: 'DRAWING',
  movie_drama: 'MOVIE_DRAMA',
  fashion: 'FASHION',
  cooking: 'COOKING',
} as const;

const RELIGION_MAP = {
  기독교: 'CHRISTIAN',
  천주교: 'CATHOLIC',
  불교: 'BUDDHISM',
  무교: 'NO_RELIGION',
  기타: 'ETC',
} as const;

const SMOKING_MAP = {
  흡연: 'TRUE',
  비흡연: 'FALSE',
  '상관 없어요!': 'NOT_MATTER',
} as const;

const ANIMAL_MAP = {
  dog: 'DOG',
  cat: 'CAT',
  rabbit: 'RABBIT',
  fox: 'FOX',
  bear: 'BEAR',
  hamster: 'HAMSTER',
  monkey: 'MONKEY',
  dinosaur: 'DINOSAUR',
  chick: 'CHICK',
} as const;

const useApi = () => {
  const { age, gender, height, name } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page1,
  );
  const { kakaoId, major, phone, studentType } = useAtomValue(
    personalDataAtoms.personalMyInformationStep.page2,
  );
  const { drinkRange, religion, smoking } = useAtomValue(
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

  const logInValue = useAtomValue(isLoggedInAtom);
  const resetTeam = async () => {
    await MeetingAPI.deleteMeeting('SINGLE', true).finally(() =>
      MeetingAPI.createMeeting('SINGLE', true),
    );
  };

  useEffect(() => {
    if (logInValue) resetTeam();
  }, [logInValue]);

  const updateUser = () => {
    const body = {
      age: Number(age.replace('~', '')),
      department: major,
      gender: gender!,
      height: Number(height.replace('~', '')),
      kakaoTalkId: kakaoId,
      name,
      phoneNumber: phone,
      studentType: STUDENT_MAP[studentType!],
      drinkingMin: drinkRange[0],
      drinkingMax: drinkRange[1],
      interest: interestOptions.map(interest => INTEREST_MAP[interest]),
      mbti,
      religion: RELIGION_MAP[religion!],
      smoking: SMOKING_MAP[smoking!],
      spiritAnimal: animalOptions.map(animal => ANIMAL_MAP[animal]),
    };

    MeetingAPI.updateUser(body);
    MeetingAPI.updateMessage('SINGLE', true, { message });
  };

  return { updateUser };
};

const PersonalMyInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/common/branchGatewayStep' },
    nextStep: { path: '/personal/myRomanceStep' },
  });

  const { updateUser } = useApi();

  const onNext = async () => {
    if (currentPage === 7) {
      await updateUser();
    }
    PageHandler.onNext();
  };

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('personalMyInformationStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'01. 나의 정보 입력하기'}
        isProgress={true}
        currentStep={1}
        totalStep={7}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={2}>
          <SecondPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={3}>
          <ThirdPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={4}>
          <ForthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={5}>
          <FifthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={6}>
          <SixthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={7}>
          <SeventhPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onPrev={PageHandler.onPrev}
        onNext={onNext}
      />
    </PageLayout>
  );
};

export default PersonalMyInformationStep;
