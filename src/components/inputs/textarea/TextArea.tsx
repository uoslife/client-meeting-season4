import styled from '@emotion/styled';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { colors } from '~/styles/colors';

type TextAreaProps = {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  reset: () => void;
};

const TextArea = ({ value, placeholder, onChange, reset }: TextAreaProps) => (
  <S.Container>
    <S.XIconWrapper>
      <IconButton
        onClick={reset}
        width={20}
        height={20}
        iconName="clearButton"
      />
    </S.XIconWrapper>
    <S.Input value={value} onChange={onChange} placeholder={placeholder} />
  </S.Container>
);

export default TextArea;

const S = {
  Container: styled.div`
    position: relative;

    width: 100%;
    height: 100%;
  `,
  XIconWrapper: styled.div`
    position: absolute;
    right: 20px;
    top: 12px;
  `,
  Input: styled.textarea`
    font-family: 'GothicA1Type-Regular';
    font-size: 14px;
    line-height: 19.5px;

    width: 100%;
    height: 100%;
    padding: 12px 50px 12px 20px;

    outline: 0;
    border-radius: 6px;

    border: 1px solid ${colors.Gray300};
    :focus {
      border: 1px solid ${colors.Primary500};
    }
  `,
};
