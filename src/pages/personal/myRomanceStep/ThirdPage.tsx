import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { pageFinishAtom } from '~/models/funnel';

const ThirdPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyRomanceStep.page3,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyRomanceStep.page3;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="personal"
      questionNumber={3}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        '나와 지금 당장 해결해 자ㄱi야',
        '나에게 시간을 조금만 줘 Honey,,,',
      ]}
      question="반쪽과 다툰 나의 속상한 마음..."
      imageSource="\images\personal\myRomanceStep\3.png"
    />
  );
};

export default ThirdPage;
