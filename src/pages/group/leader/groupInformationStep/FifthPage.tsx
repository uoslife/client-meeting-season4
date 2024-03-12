import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { combinedValidatiesAtoms } from '~/models';
import { groupDataAtoms } from '~/models/group/data';
import { pageFinishAtom } from '~/store/funnel';

const FifthPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderGroupInformationStep.page5,
  );

  const { answer: selectedValue } = pageState;
  const select = (value: 0 | 1 | 2) => setPageState({ answer: value });

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderGroupInformationStep.page5;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  console.log(selectedValue);

  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={4}
      select={select}
      selectedValue={selectedValue}
      answerOptionLabels={[
        'ㄴr는 친구ㄱr 만들ヱ んı퍼',
        'レド는 ㅅГ랑에 언제LГ 목말ㄹr..',
        'レド는 뭐든 좋ㅇr',
      ]}
      question="우리 팅은 미팅에서..."
      // TODO: Change the image source
      imageSource="\images\personal\myRomanceStep\1.png"
    />
  );
};

export default FifthPage;
