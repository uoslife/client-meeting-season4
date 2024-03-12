import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const ThirdPage = () => {
  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={2}
      answerOptions={[
        'ㄷト같○l 술게임을 ㈛ヱ 싶ㄷr..',
        '술보ㄷト 너와의 ㄷН화가 ㈛ヱ 싶다..',
      ]}
      question="우리 팅은 미팅에서..."
      // TODO: Change the image source
      imageSource="\images\personal\myRomanceStep\1.png"
    />
  );
};

export default ThirdPage;
