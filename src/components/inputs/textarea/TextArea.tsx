import styled from '@emotion/styled';

type TextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

const TextArea = ({ value, onChange, placeholder }: TextAreaProps) => {
  return (
    <S.Container value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default TextArea;

const S = {
  Container: styled.textarea`
    width: 100%;
    border-radius: 6px;
    height: 100%;
    flex: 1;
  `,
};
