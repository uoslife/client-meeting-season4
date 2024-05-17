import Text from '~/components/typography/Text';

const CommentComponents = {
  Title: () => (
    <Text
      color="Secondary900"
      typography="NeoBodyL"
      size={24}
      label="시대생 in y2k"
    />
  ),
  Describing: () => (
    <Text
      color="Secondary900"
      typography="NeoTitleM"
      label={'시대생 주점에서 \n' + '룰렛 돌리고 음료 받자!'}
    />
  ),
};

export default CommentComponents;
