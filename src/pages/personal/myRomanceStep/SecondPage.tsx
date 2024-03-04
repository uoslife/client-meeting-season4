import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const SecondPage = () => (
  <QuestionPageTemplate
    meetingType="personal"
    questionNumber={2}
    answerOptions={[
      'ㄴr만의 아ㅈi트에서,,, 단둘이,,,',
      'ㅈi대 뽀ㄷH나는 곳에서 맛난거 먹쟈',
    ]}
    question="내 반쪽과 함께할 데이트는..."
    imageSource="\images\personal\myRomanceStep\2.png"
  />
);

export default SecondPage;
