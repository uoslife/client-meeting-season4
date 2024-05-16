import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import Text from '~/components/typography/Text';
import IconButton from '~/components/buttons/iconButton/IconButton';

type GuidePopupProps = {
  label: string;
  setIsCleanUpModalOpen: React.Dispatch<boolean>;
};
const GuidePopup = ({
  label,
  setIsCleanUpModalOpen,
  ...props
}: GuidePopupProps) => {
  return (
    <GuidePopupContainer {...props}>
      <Text label={label} color={'Secondary900'} typography={'PFLabelS'} />
      <IconButton
        iconName={'delete'}
        width={14}
        height={14}
        onClick={() => setIsCleanUpModalOpen(false)}
      />
    </GuidePopupContainer>
  );
};
export default GuidePopup;

const GuidePopupContainer = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 240px;
  height: 40px;
  right: -5px;
  top: 61px;
  color: white;
  padding: 12px 12.8px;
  background: ${colors.Red200};
  border-color: ${colors.Red200};
  border-radius: 100px;

  :after {
    content: '';
    position: absolute;
    top: 5%;
    left: 40%;
    width: 0;
    height: 0;
    border: 22px solid transparent;
    border-bottom-color: ${colors.Red200};
    border-top: 0;
    border-right: 0;
    margin-left: 98px;
    margin-top: -22px;
  }
`;
