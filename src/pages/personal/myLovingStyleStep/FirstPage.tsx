import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';
import { useToggleSelect } from '~/hooks/useToggleSelect';
import { PageProps } from '~/types/page.type';

const FirstPage = ({ setIsPageFinished }: PageProps) => {
  const { checkSelectedValues, select } = useToggleSelect(1);

  return (
    <QuestionPageTemplate
      number={1}
      answer1="친구같은 나으1 연인,,,"
      answer2="always,,, 두근ㄷH는 ㄴr의 마음,,,✫彡"
      question="나의 연애 style은..."
      checkSelectedValues={checkSelectedValues}
      select={select}
      imageSource="\images\personal\myLovingStyleStep\1.png"
    />
  );
};

export default FirstPage;
