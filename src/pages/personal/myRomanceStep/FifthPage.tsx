import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { useToggleSelect } from '~/hooks/useToggleSelect';

const FifthPage = () => {
  const { checkSelectedValues, select } = useToggleSelect(1);

  return (
    <QuestionPageTemplate
      number={5}
      question="내 반쪽에게 ㄴr의 사랑 표현은,,,"
      answer1="ㄴH 마음을 매일 속삭일つㅓ야,,,♡⁼³"
      answer2="내 눈빛으로 느껴ㅈi지 않ㅇr？"
      checkSelectedValues={checkSelectedValues}
      select={select}
      imageSource="\images\personal\myLovingStyleStep\5.png"
    />
  );
};

export default FifthPage;
