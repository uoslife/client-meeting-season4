import { SingleCardBodyProps } from './Body.type';
import { CardStyleProps } from '~/components/card/Card';

export const getCardStyleProps = (
  theme: SingleCardBodyProps['theme'],
): CardStyleProps => ({
  backgroundColorName: theme === 'BG_GREY' ? 'Gray000' : 'White',
  borderWidth: theme === 'BG_GREY' ? 1 : 2,
  borderColorName: 'Gray500',
  borderRadius: 21,
});
