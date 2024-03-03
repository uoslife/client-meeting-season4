import S from './Checkbox.style';

export type CheckboxProps = {
  checked: boolean;
  onClick?: () => void;
  height?: number;
  width?: number;
};

const Checkbox = ({
  checked,
  onClick,
  height = 24,
  width = 24,
}: CheckboxProps) => {
  return (
    <S.Wrapper
      checked={checked}
      onClick={onClick}
      height={height}
      width={width}>
      {/* TODO: img를 Icon 컴포넌트로 교체 */}
      {checked && <img src="/images/icons/checkbox-check.png" width={20} />}
    </S.Wrapper>
  );
};

export default Checkbox;
