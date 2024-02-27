import RoundButton from '../buttons/roundButton/RoundButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import PageLayout from '../layout/page/PageLayout';
import QuestionLabel from './QuestionLabel';
import Text from '../typography/Text';
import { personalApplyAtoms } from '~/store/meeting';
import { useImmerAtom } from 'jotai-immer';
import { useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';

type QuestionPageTemplateProps = {
  imageSource: string;
  question: string;
  answerOption1: string;
  answerOption2: string;
  questionNumber: number;
};

// TODO: 각 버튼의 중복되는 부분 리팩토링, 두 개보다 많은 옵션을 가지는 경우에 대응하기
const QuestionPageTemplate = ({
  imageSource,
  answerOption1,
  answerOption2,
  question,
  questionNumber,
}: QuestionPageTemplateProps) => {
  const index = questionNumber - 1;
  const [questionListState, setQuestionListState] = useImmerAtom(
    personalApplyAtoms.info_question,
  );
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  const { selectedAnswerOption } = questionListState[index];
  // 현재 페이지의 selectedAnswerOption값이 truthy value라면 Next Button 활성화
  setIsPageFinished(!!selectedAnswerOption);

  const selectAnswerOption = (answerOption: string) => {
    setQuestionListState(draft => {
      draft[index].selectedAnswerOption = answerOption;
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
                  selectedAnswerOption === answerOption1 ? 'active' : 'inactive'
                }
                onClick={() => selectAnswerOption(answerOption1)}>
                <Text
                  color={
                    selectedAnswerOption === answerOption1
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
                  selectedAnswerOption === answerOption2 ? 'active' : 'inactive'
                }
                onClick={() => selectAnswerOption(answerOption2)}>
                <Text
                  color={
                    selectedAnswerOption === answerOption2
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
