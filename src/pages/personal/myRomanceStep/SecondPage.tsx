import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { pageFinishAtom } from '~/models/funnel';

const SecondPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyRomanceStep.page2,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyRomanceStep.page2;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="personal"
      questionNumber={2}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        'ㄴr만의 아ㅈi트에서,,, 단둘이,,,',
        'ㅈi대 뽀ㄷH나는 곳에서 맛난거 먹쟈',
      ]}
      question="내 반쪽과 함께할 데이트는..."
      imageSource="\images\personal\myRomanceStep\2.png"
    />
  );
};

export default SecondPage;
