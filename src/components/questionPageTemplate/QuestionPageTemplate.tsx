import RoundButton from '../buttons/roundButton/RoundButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import PageLayout from '../layout/page/PageLayout';
import QuestionLabel from './QuestionLabel';
import Text from '../typography/Text';
import { personalApplyAtoms } from '~/store/meeting';
import { useImmerAtom } from 'jotai-immer';

type QuestionPageTemplateProps = {
  imageSource: string;
  question: string;
  answerOption1: string;
  answerOption2: string;
  questionNumber: number;
};

const QuestionPageTemplate = ({
  imageSource,
  answerOption1,
  answerOption2,
  question,
  questionNumber,
}: QuestionPageTemplateProps) => {
  const index = questionNumber - 1;
  const [questionState, setQuestionState] = useImmerAtom(
    personalApplyAtoms.info_question,
  );

  const questionStateItemLabel = questionState[index].label;

  const optionButtonHandlerGenerator = (label: string) => () => {
    setQuestionState(draft => {
      draft[index].label = label;
    });
  };

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
              <RoundButton
                label=""
                height={56}
                status={
                  questionStateItemLabel === answerOption1
                    ? 'active'
                    : 'inactive'
                }
                onClick={optionButtonHandlerGenerator(answerOption1)}>
                <Text
                  color={
                    questionStateItemLabel === answerOption1
                      ? 'White'
                      : 'Primary500'
                  }
                  label={answerOption1}
                  typography="NeoButtonL"
                />
              </RoundButton>
              <RoundButton
                label=""
                height={56}
                status={
                  questionStateItemLabel === answerOption2
                    ? 'active'
                    : 'inactive'
                }
                onClick={optionButtonHandlerGenerator(answerOption2)}>
                <Text
                  color={
                    questionStateItemLabel === answerOption2
                      ? 'White'
                      : 'Primary500'
                  }
                  label={answerOption2}
                  typography="NeoButtonL"
                />
              </RoundButton>
            </Col>
          </Col>
        </Row>
      }
    />
  );
};

export default QuestionPageTemplate;
