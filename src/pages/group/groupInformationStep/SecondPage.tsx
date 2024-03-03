import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const SecondPage = () => {
  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={1}
      answerOptions={['활발ㅎŁ 편○l에요', 'ㅊr분ㅎŁ 편○l에요']}
      question="우리 팅의 분위기는..."
      // TODO: Change the image source
      imageSource="\images\personal\myRomanceStep\1.png"
    />
  );
};

export default SecondPage;
