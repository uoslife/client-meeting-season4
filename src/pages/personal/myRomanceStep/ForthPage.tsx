import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { pageFinishAtom } from '~/models/funnel';

const ForthPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyRomanceStep.page4,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyRomanceStep.page4;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="personal"
      questionNumber={4}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        '필요할ㄸH만 연락할己ㅐ ࣪₊♡𓂃',
        '시ㅅi콜콜 일상을 공유ㅎr고 싶어',
      ]}
      question="나의 반쪽과 연락하는 시간은..."
      imageSource="\images\personal\myRomanceStep\4.png"
    />
  );
};

export default ForthPage;
