import RoundButton from '../buttons/roundButton/RoundButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import PageLayout from '../layout/page/PageLayout';
import QuestionLabel from './QuestionLabel';
import Text from '../typography/Text';
import { useToggleSelect } from '~/hooks/useToggleSelect';

type QuestionPageTemplateProps = {
  imageSource: string;
  question: string;
  answer1: string;
  answer2: string;
  number: number;
} & Pick<ReturnType<typeof useToggleSelect>, 'checkSelectedValues' | 'select'>;

const QuestionPageTemplate = ({
  imageSource,
  checkSelectedValues,
  select,
  answer1,
  answer2,
  question,
  number,
}: QuestionPageTemplateProps) => {
  return (
    <PageLayout.DoubleCardBody
      topCardPadding="36px 39px"
      topCardChildren={<img src={imageSource} alt="" />}
      bottomCardPadding="36px 20px 24px"
      bottomCardChildren={
        <Row>
          <Col gap={28}>
            <Col gap={12}>
              <QuestionLabel number={number} />
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
                status={checkSelectedValues(0) ? 'active' : 'inactive'}
                onClick={select(0)}>
                <Text
                  color={checkSelectedValues(0) ? 'White' : 'Primary500'}
                  label={answer1}
                  typography="NeoButtonL"
                />
              </RoundButton>
              <RoundButton
                label=""
                height={56}
                status={checkSelectedValues(1) ? 'active' : 'inactive'}
                onClick={select(1)}>
                <Text
                  color={checkSelectedValues(1) ? 'White' : 'Primary500'}
                  label={answer2}
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
