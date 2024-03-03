import QuestionPageTemplate from '~/components/questionPageTemplate/QuestionPageTemplate';

const FifthPage = () => (
  <QuestionPageTemplate
    meetingType="personal"
    questionNumber={5}
    answerOptions={[
      'ㄴH 마음을 매일 속삭일つㅓ야,,,♡⁼³',
      '내 눈빛으로 느껴ㅈi지 않ㅇr？',
    ]}
    question="내 반쪽에게 ㄴr의 사랑 표현은,,,"
    imageSource="\images\personal\myRomanceStep\5.png"
  />
);

export default FifthPage;
