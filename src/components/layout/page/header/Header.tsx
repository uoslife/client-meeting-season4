import * as S from './Header.style';
import Row from '~/components/layout/Row';
import { useNavigate } from 'react-router-dom';
import IconButton from '~/components/buttons/iconButton/IconButton';
import Text from '~/components/typography/Text';
import Pad from '~/components/layout/Pad';

export type HeaderProps = {
  title: string;
  isBackArrow?: boolean;
  isProgress?: boolean;
  totalPage?: number;
  currentPage?: number;
};

const Header = ({
  title,
  isBackArrow = false,
  isProgress = false,
  currentPage,
  totalPage,
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
              isBackArrow ? navigate('/common/branchGateWay') : navigate('/')
            }
          />
          <Text label={title} color={'White'} typography={'NeoTitleM'} />
          <S.DummyBox />
        </Row>
      </Pad>

      {isProgress && (
        <S.ProgressContainer>
          <S.ProgressBar size={(currentPage! / totalPage!) * 100} />
          <Text
            label={`${currentPage} / ${totalPage}`}
            color={'Primary200'}
            typography={'PFLabelM'}
          />
        </S.ProgressContainer>
      )}
    </S.Container>
  );
};

export default Header;
