import ModalPortal from '~/components/modal/cleanUpModal/Portal';
import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import Text from '~/components/typography/Text';

type CleanUpModalProps = {
  setIsCleanUpModalOpen: React.Dispatch<boolean>;
  title: string;
  description: string;
  onClick: () => void;
};

const CleanUpModal = ({
  setIsCleanUpModalOpen,
  onClick,
  title,
  description,
}: CleanUpModalProps) => {
  return (
    <ModalPortal>
      <S.Wrapper onClick={() => setIsCleanUpModalOpen(false)}>
        <S.Container onClick={e => e.stopPropagation()}>
          <S.TextWrapper>
            <Text
              label={title}
              color={'Gray500'}
              typography={'GoThicTitleS'}
              size={15}
            />
            <Text
              label={description}
              color={'Gray200'}
              typography={'GoThicButtonM'}
            />
          </S.TextWrapper>
          <S.Button onClick={onClick}>
            <Text
              label={'확인'}
              color={'Primary500'}
              typography={'NeoTitleM'}
            />
          </S.Button>
          <S.Button onClick={() => setIsCleanUpModalOpen(false)}>
            <Text label={'닫기'} color={'Gray200'} typography={'NeoTitleM'} />
          </S.Button>
        </S.Container>
      </S.Wrapper>
    </ModalPortal>
  );
};

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  `,
  Container: styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: ${colors.White};
    height: 202px;
    width: 300px;
    border-radius: 12px;
  `,
  TextWrapper: styled.div`
    padding: 24px 16px 16px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `,
  Button: styled.div`
    border-top: 1px solid ${colors.Gray50};
    padding: 10px;
  `,
};

export default CleanUpModal;
