import * as S from './Header.style';
import Row from '~/components/layout/Row';
import { useNavigate } from 'react-router-dom';
import IconButton from '~/components/buttons/iconButton/IconButton';
import Text from '~/components/typography/Text';
import Pad from '~/components/layout/Pad';

export type HeaderProps = {
  title: string;
  isBackArrow?: boolean;
  backArrowNavigate?: string;
  isProgress?: boolean;
  totalStep?: number;
  currentStep?: number;
};

const Header = ({
  title,
  isBackArrow = false,
  backArrowNavigate = '/common/branchGatewayStep',
  isProgress = false,
  currentStep,
  totalStep,
}: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <S.Container isProgress={isProgress}>
      <Pad left={5} right={5}>
        <Row justify={'space-between'} align={'center'}>
          <IconButton
            iconName={
              isBackArrow ? 'headerButton-backArrow' : 'headerButton-home'
            }
            width={24}
            height={25.5}
            onClick={() =>
              isBackArrow
                ? navigate(backArrowNavigate)
                : navigate('/common/landingStep')
            }
          />
          <Text label={title} color={'White'} typography={'NeoTitleM'} />
          <S.DummyBox />
        </Row>
      </Pad>

      {isProgress && (
        <S.ProgressContainer>
          <S.ProgressBar size={(currentStep! / totalStep!) * 100} />
          <Text
            label={`${currentStep} / ${totalStep}`}
            color={'Primary200'}
            typography={'PFLabelM'}
          />
        </S.ProgressContainer>
      )}
    </S.Container>
  );
};

export default Header;
