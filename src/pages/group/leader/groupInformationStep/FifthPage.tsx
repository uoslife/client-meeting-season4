import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const FifthPage = () => {
  return (
    <QuestionPageTemplate
      meetingType="group"
      questionNumber={4}
      answerOptions={[
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
