import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { useToggleSelect } from '~/hooks/useToggleSelect';

const SecondPage = () => {
  const { checkSelectedValues, select } = useToggleSelect(1);

  return (
    <QuestionPageTemplate
      number={2}
      answer1="ㄴr만의 아ㅈi트에서,,, 단둘이,,,"
      answer2="ㅈi대 뽀ㄷH나는 곳에서 맛난거 먹쟈"
      question="내 반쪽과 함께할 데이트는..."
      checkSelectedValues={checkSelectedValues}
      select={select}
      imageSource="\images\personal\myLovingStyleStep\2.png"
    />
  );
};

export default SecondPage;
