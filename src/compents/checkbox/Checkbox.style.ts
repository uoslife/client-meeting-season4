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
      // TODO: rgba 형식 사용 대신 지정 color config으로 사용하는 쪽으로 통일
      checked ? 'none' : '2px 2px 0px 0px rgba(74, 74, 74, 0.90) inset'};
  `,
};

export default S;
