import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { useToggleSelect } from '~/hooks/useToggleSelect';

const ThirdPage = () => {
  const { checkSelectedValues, select } = useToggleSelect(1);

  return (
    <QuestionPageTemplate
      number={3}
      answer1="나와 지금 당장 해결해 자ㄱi야"
      answer2="나에게 시간을 조금만 줘 Honey,,,"
      question="반쪽과 다툰 나의 속상한 마음..."
      checkSelectedValues={checkSelectedValues}
      select={select}
      imageSource="\images\personal\myLovingStyleStep\3.png"
    />
  );
};

export default ThirdPage;
