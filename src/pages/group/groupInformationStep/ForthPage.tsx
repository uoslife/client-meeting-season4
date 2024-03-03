import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const ForthPage = () => {
  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={3}
      answerOptions={[
        '술보ㄷト 분우ιブløłl 취ㅎŁㄷト..',
        '술은 적당히 ㅁトんıヱ 싶øł..',
        '오늘은 취㈛ヱ 싶ㄷト..',
      ]}
      question="우리 팅은 미팅에서..."
      // TODO: Change the image source
      imageSource="\images\personal\myRomanceStep\1.png"
    />
  );
};

export default ForthPage;
