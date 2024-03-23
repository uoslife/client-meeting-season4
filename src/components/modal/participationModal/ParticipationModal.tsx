import * as S from './ParticipationModal.style';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { useEffect, useState } from 'react';

export type ParticipationModalType = {
  isActive: boolean;
  label: string;
  currentParticipant: number;
  maxParticipant: 1 | 3;
  cancelButtonClicked: () => void;
  joinButtonClicked: () => void;
};

const ParticipationModal = ({
  isActive,
  label,
  currentParticipant,
  maxParticipant,
  cancelButtonClicked,
  joinButtonClicked,
}: ParticipationModalType) => {
  const [visible, setVisible] = useState(false);
  const [initLoad, setInitLoad] = useState(false);

  useEffect(() => {
    if (visible && !initLoad) setInitLoad(true);
    setVisible(isActive);
  }, [isActive, visible]);

  return (
    initLoad && (
      <S.Container isActive={visible}>
        <S.GrayHandler />
        <Text
          label={'팅 이름'}
          color={'Secondary700'}
          typography={'PretendardRegular'}
          weight={400}
          size={14}
          style={{ marginBottom: '14px' }}
        />
        <Text
          label={`"${label}"`}
          color={'Secondary900'}
          typography={'NeoTitleM'}
          weight={400}
          size={18}
          style={{ marginBottom: '8px' }}
        />
        <S.ParticipantCounterWrapper>
          <IconButton
            iconName="participationModal-human"
            width={15}
            height={15}
            format="svg"
            style={{ padding: '4.5px' }}
          />
          <Text
            label={`${currentParticipant}/${maxParticipant}`}
            color={'Secondary700'}
            typography={'PretendardRegular'} //글씨체 수정
            weight={500}
            size={16}
          />
        </S.ParticipantCounterWrapper>
        <S.DivLine />
        <Text
          label={'팅에 참여 하시겠습니까?'}
          color={'Secondary700'}
          typography={'GoThicTitleS'}
          weight={700}
          size={14}
          style={{ marginBottom: '16px' }}
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
            label={'참여'}
          />
        </S.ButtonWrapper>
      </S.Container>
    )
  );
};

export default ParticipationModal;
