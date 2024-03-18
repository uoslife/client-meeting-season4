import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { pageFinishAtom } from '~/models/funnel';

const FifthPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyRomanceStep.page5,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyRomanceStep.page5;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="personal"
      questionNumber={5}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        'ㄴH 마음을 매일 속삭일つㅓ야,,,♡⁼³',
        '내 눈빛으로 느껴ㅈi지 않ㅇr？',
      ]}
      question="내 반쪽에게 ㄴr의 사랑 표현은,,,"
      imageSource="\images\personal\myRomanceStep\5.png"
    />
  );
};
export default FifthPage;
