import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const FirstPage = () => (
  <QuestionPageTemplate
    meetingType="personal"
    questionNumber={1}
    answerOptions={[
      '친구같은 나으1 연인,,,',
      'always,,, 두근ㄷH는 ㄴr의 마음,,,✫彡',
    ]}
    question="나의 연애 style은..."
    imageSource="\images\personal\myRomanceStep\1.png"
  />
);

export default FirstPage;
