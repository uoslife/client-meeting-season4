import { css } from '@emotion/react';
import { colorType, typographyType } from '~/types/style.type';
import { colors } from '~/styles/colors';
import { Combine } from '~/types/utils.type';
import { typographies } from '~/styles/typographies';

export type TxtProps = Combine<
  {
    label: string;
    color: colorType;
    typography: typographyType;
    weight?: number;
    size?: number;
  },
  React.ComponentProps<'div'>
>;

const Text = ({
  label,
  color,
  typography,
  weight,
  size,
  ...props
}: TxtProps) => {
  return (
    <div
      css={css`
        color: ${colors[color]};
        ${typographies[typography]};
        font-weight: ${weight};
        white-space: pre-line;
        font-size: ${size}px;
        word-break: keep-all;
        text-align: center;
      `}
      {...props}>
      {label}
    </div>
  );
};

export default Text;
