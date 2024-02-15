import S from './Checkbox.style';

export type CheckboxProps = {
  checked: boolean;
  onClick: () => void;
};

const Checkbox = ({ checked, onClick }: CheckboxProps) => {
  return (
    <S.Wrapper checked={checked} onClick={onClick}>
      {/* TODO: img를 Icon 컴포넌트로 교체 */}
      {checked && <img src="/images/icons/checkbox-check.png" width={20} />}
    </S.Wrapper>
  );
};

export default Checkbox;
