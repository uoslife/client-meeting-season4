import RoundButton from '../buttons/roundButton/RoundButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import PageLayout from '../layout/page/PageLayout';
import QuestionLabel from './QuestionLabel';
import Text from '../typography/Text';
import styled from '@emotion/styled';

type QuestionPageTemplateProps<TAnswerValue> = {
  select: (value: TAnswerValue) => void;
  meetingType: 'group' | 'personal';
  imageSource: string;
  question: string;
  answerOptionLabels: string[];
  questionNumber: number;
  selectedValue: TAnswerValue | null;
};

const AnswerOptionButton = ({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <RoundButton
    height={56}
    status={isSelected ? 'active' : 'inactive'}
    onClick={onClick}>
    <Text
      color={isSelected ? 'White' : 'Primary500'}
      label={label}
      typography="NeoButtonL"
    />
  </RoundButton>
);

const QuestionPageTemplate = <TAnswerValue,>({
  select,
  imageSource,
  answerOptionLabels,
  question,
  selectedValue,
  questionNumber,
}: QuestionPageTemplateProps<TAnswerValue>) => {
  return (
    <PageLayout.DoubleCardBody
      topCardPadding="36px 39px"
      topCardChildren={<img src={imageSource} alt="" />}
      bottomCardPadding="36px 20px 24px"
      bottomCardChildren={
        <Row>
          <Col gap={28}>
            <Col gap={12}>
              <QuestionLabel questionNumber={questionNumber} />
              <Paddler left={4}>
                <Text
                  color="Secondary900"
                  label={question}
                  typography="NeoTitleM"
                />
              </Paddler>
            </Col>
            <Col gap={8}>
              {answerOptionLabels.map((label, idx) => (
                <AnswerOptionButton
                  label={label}
                  onClick={() => select(idx as TAnswerValue)}
                  isSelected={idx === selectedValue}
                />
              ))}
            </Col>
            <S.DummyBox />
          </Col>
        </Row>
      }
    />
  );
};

export default QuestionPageTemplate;

const S = {
  DummyBox: styled.div`
    height: 100px;
  `,
};
