import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { groupDataAtoms } from '~/models/group/data';
import { pageFinishAtom } from '~/models/funnel';

const ForthPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderGroupInformationStep.page4,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1 | 2) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderGroupInformationStep.page4;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={3}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        '술보ㄷト 분우ιブløłl 취ㅎŁㄷト..',
        '술은 적당히 ㅁトんıヱ 싶øł..',
        '오늘은 취㈛ヱ 싶ㄷト..',
      ]}
      question="우리 팅은 미팅에서..."
      // TODO: Change the image source
      imageSource="\images\group\groupInformationStep\4.png"
    />
  );
};

export default ForthPage;
