import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { useToggleSelect } from '~/hooks/useToggleSelect';

const ForthPage = () => {
  const { checkSelectedValues, select } = useToggleSelect(1);

  return (
    <QuestionPageTemplate
      number={4}
      answer1="필요할ㄸH만 연락할己ㅐ ࣪₊♡𓂃"
      answer2="시ㅅi콜콜 일상을 공유ㅎr고 싶어"
      question="나의 반쪽과 연락하는 시간은..."
      checkSelectedValues={checkSelectedValues}
      select={select}
      imageSource="\images\personal\myLovingStyleStep\4.png"
    />
  );
};

export default ForthPage;
