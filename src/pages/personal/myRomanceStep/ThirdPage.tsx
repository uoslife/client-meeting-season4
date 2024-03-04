import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const ThirdPage = () => (
  <QuestionPageTemplate
    meetingType="personal"
    questionNumber={3}
    answerOptions={[
      '나와 지금 당장 해결해 자ㄱi야',
      '나에게 시간을 조금만 줘 Honey,,,',
    ]}
    question="반쪽과 다툰 나의 속상한 마음..."
    imageSource="\images\personal\myRomanceStep\3.png"
  />
);

export default ThirdPage;
