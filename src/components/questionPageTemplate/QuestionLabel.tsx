import styled from '@emotion/styled';
import Text from '../typography/Text';

const QuestionLabel = ({ number }: { number: number }) => {
  return (
    <S.Container>
      <S.LeftArea>
        <Text
          label={`Q${number}.`}
          typography="GoThicTitleS"
          size={14}
          color="LightBlue"
        />
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
