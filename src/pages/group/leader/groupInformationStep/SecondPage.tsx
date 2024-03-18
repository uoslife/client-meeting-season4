import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { groupDataAtoms } from '~/models/group/data';
import { pageFinishAtom } from '~/store/funnel';

const SecondPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderGroupInformationStep.page2,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderGroupInformationStep.page2;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={1}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={['활발ㅎŁ 편○l에요', 'ㅊr분ㅎŁ 편○l에요']}
      question="우리 팅의 분위기는..."
      // TODO: Change the image source
      imageSource="\images\group\groupInformationStep\2.png"
    />
  );
};

export default SecondPage;
