import * as S from './ApplicationModal.style';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';

export type ApplicationModalType = {
  isActive: boolean;
  cancelButtonClicked: () => void;
  joinButtonClicked: () => void;
};

const ApplicationModal = ({
  isActive,
  cancelButtonClicked,
  joinButtonClicked,
}: ApplicationModalType) => {
  return (
    <S.Container isActive={isActive}>
      <S.GrayHandler />
      <Text
        label={'매칭 신청을 하시겠습니까?'}
        color={'Gray500'}
        typography={'GoThicTitleS'}
        weight={700}
        size={14}
        style={{ margin: '16px 0px' }}
      />
      <S.ButtonWrapper>
        <RoundButton
          status={'cancel'}
          borderType={'gray'}
          height={52}
          onClick={cancelButtonClicked}
          label={'취소'}
        />
        <RoundButton
          status={'active'}
          height={52}
          onClick={joinButtonClicked}
          label={'신청'}
        />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ApplicationModal;
