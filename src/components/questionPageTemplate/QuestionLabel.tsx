import styled from '@emotion/styled';
import Text from '../typography/Text';

type questionLabelType = {
  questionNumber?: number;
  children?: React.ReactNode;
};

const QuestionLabel = ({ questionNumber, children }: questionLabelType) => {
  return (
    <S.Container>
      <S.LeftArea>
        {questionNumber && (
          <Text
            label={`Q${questionNumber}.`}
            typography="GoThicTitleS"
            size={14}
            color="LightBlue"
          />
        )}
        {children}
      </S.LeftArea>
      <S.RightArea />
    </S.Container>
  );
};

export default QuestionLabel;

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
  `,
  LeftArea: styled.div`
    flex: 1;

    text-align: center;
    padding: 3px 0;

    border: 1px solid #959595;
    border-bottom: none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  `,
  RightArea: styled.div`
    flex: 3;

    border-bottom: 1px solid #959595;
  `,
};
