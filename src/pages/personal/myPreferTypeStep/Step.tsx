import { useFunnel } from '~/hooks/useFunnel';
import PageLayout from '~/components/layout/page/PageLayout';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import { useAtomValue, useSetAtom } from 'jotai';
import { personalDataAtoms } from '~/models/personal/data';
import { MeetingAPI } from '~/api';
import { useStepToGoBack } from '~/hooks/useStepToGoBack';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { navigateNextStepAtom } from '~/models/funnel';

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

const STUDENT_MAP = {
  학부생: 'UNDERGRADUATE',
  대학원생: 'POSTGRADUATE',
  졸업생: 'GRADUATE',
} as const;

const useApi = () => {
  const { ageRange, heightRange, studentTypes } = useAtomValue(
    personalDataAtoms.personalPreferInfoStep.page1,
  );
  const { drinkRange, religionOptions, smoking, univs } = useAtomValue(
    personalDataAtoms.personalPreferInfoStep.page2,
  );
  const { animalOptions } = useAtomValue(
    personalDataAtoms.personalPreferInfoStep.page3,
  );
  const { mbtis } = useAtomValue(
    personalDataAtoms.personalPreferInfoStep.page4,
  );

  const updatePrefer = () => {
    const body = {
      heightMin: heightRange[0],
      heightMax: heightRange[1],
      ageMin: ageRange[0],
      ageMax: ageRange[1],
      drinkingMax: drinkRange[0],
      drinkingMin: drinkRange[1],
      university: univs,
      mbti: mbtis,
      religion: religionOptions.map(religion => RELIGION_MAP[religion]),
      smoking: [SMOKING_MAP[smoking!]],
      spiritAnimal: animalOptions.map(animal => ANIMAL_MAP[animal]),
      studentType: studentTypes.map(studentType => STUDENT_MAP[studentType]),
    };

    return MeetingAPI.updatePrefer('SINGLE', true, body);
  };

  return { updatePrefer };
};

const PAGE_NUMBER = [1, 2, 3, 4];

const PersonalMyPreferTypeStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/personal/myRomanceStep' },
    nextStep: { path: '/personal/pledgeStep' },
  });

  const { updatePrefer } = useApi();

  const onNext = async () => {
    // if (currentPage === 4) {
    //   await updatePrefer();
    // }
    // TODO: 포트원 심사를 위한 임시 주석 처리

    PageHandler.onNext();
  };

  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const stepToGoBack = useStepToGoBack('personalPreferInfoStep');
  const navigate = useTypeSafeNavigate();

  if (stepToGoBack) {
    setNavigateNextStep(true);
    navigate(stepToGoBack);
    return null;
  }

  return (
    <PageLayout>
      <PageLayout.Header
        title={'03. 선호하는 상대 정보 입력하기'}
        isProgress={true}
        currentStep={3}
        totalStep={6}
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
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onNext={onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default PersonalMyPreferTypeStep;
