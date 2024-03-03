import RoundButton from '../buttons/roundButton/RoundButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import PageLayout from '../layout/page/PageLayout';
import QuestionLabel from './QuestionLabel';
import Text from '../typography/Text';
import { groupApplyAtoms, personalApplyAtoms } from '~/store/meeting';
import { useImmerAtom } from 'jotai-immer';
import { useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';

type QuestionPageTemplateProps = {
  meetingType: 'group' | 'personal';
  imageSource: string;
  question: string;
  answerOptions: string[];
  questionNumber: number;
};

const AnswerOptionButton = ({
  value,
  label,
  select,
}: {
  value: string;
  label: string;
  select: (value: string) => void;
}) => (
  <RoundButton
    textTypography="GoThicBodyS"
    textColor="Gray000"
    label=""
    height={56}
    status={label === value ? 'active' : 'inactive'}
    onClick={() => select(value)}>
    <Text
      color={label === value ? 'White' : 'Primary500'}
      label={value}
      typography="NeoButtonL"
    />
  </RoundButton>
);

const QuestionPageTemplate = ({
  meetingType,
  imageSource,
  answerOptions,
  question,
  questionNumber,
}: QuestionPageTemplateProps) => {
  const index = questionNumber - 1;
  const [questionListState, setQuestionListState] = useImmerAtom(
    meetingType === 'group'
      ? groupApplyAtoms.groupInfo_question
      : personalApplyAtoms.personalInfo_question,
  );
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  const { label } = questionListState[index];
  // 현재 페이지의 selectedAnswerOption값이 truthy value라면 Next Button 활성화
  setIsPageFinished(!!label);

  const select = (answerOption: string) => {
    setQuestionListState(draft => {
      draft[index].label = answerOption;
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
              {answerOptions.map(option => (
                <AnswerOptionButton
                  label={label}
                  select={select}
                  value={option}
                  key={option}
                />
              ))}
            </Col>
          </Col>
        </Row>
      }
    />
  );
};

export default QuestionPageTemplate;
