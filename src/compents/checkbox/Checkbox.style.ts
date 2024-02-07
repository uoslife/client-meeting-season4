import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { CheckboxProps } from './Checkbox';

type SRootProps = Pick<CheckboxProps, 'checked'>;

const S = {
  Root: styled.div<SRootProps>`
    height: 24px;
    width: 24px;
    border-radius: 2px;
    border: 0.5px solid ${colors.Gray500};
    background: ${colors.White};

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: ${({ checked }) =>
      checked ? 'none' : `2px 2px 0px 0px ${colors.Gray450} inset`};
  `,
};

export default S;
