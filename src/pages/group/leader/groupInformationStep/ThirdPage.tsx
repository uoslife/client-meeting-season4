import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { groupDataAtoms } from '~/models/group/data';
import { pageFinishAtom } from '~/models/funnel';

const ThirdPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderGroupInformationStep.page3,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderGroupInformationStep.page3;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={2}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        'ㄷト같○l 술게임을 ㈛ヱ 싶ㄷr..',
        '술보ㄷト 너와의 ㄷН화가 ㈛ヱ 싶다..',
      ]}
      question="우리 팅은 미팅에서..."
      // TODO: Change the image source
      imageSource="\images\group\groupInformationStep\3.png"
    />
  );
};

export default ThirdPage;
