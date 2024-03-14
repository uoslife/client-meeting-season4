import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { pageFinishAtom } from '~/store/funnel';

const FirstPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyRomanceStep.page1,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyRomanceStep.page1;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="personal"
      questionNumber={1}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        '친구같은 나으1 연인,,,',
        'always,,, 두근ㄷH는 ㄴr의 마음,,,✫彡',
      ]}
      question="나의 연애 style은..."
      imageSource="\images\personal\myRomanceStep\1.png"
    />
  );
};

export default FirstPage;
