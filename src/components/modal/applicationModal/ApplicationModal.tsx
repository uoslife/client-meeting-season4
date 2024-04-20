import * as S from './ApplicationModal.style';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { useEffect, useState } from 'react';

export type ApplicationModalType = {
  isActive: boolean;
  mainLabel: string;
  subLabel?: string;
  cancelButtonClicked: () => void;
  joinButtonClicked: () => void;
};

const ApplicationModal = ({
  isActive,
  mainLabel,
  subLabel,
  cancelButtonClicked,
  joinButtonClicked,
}: ApplicationModalType) => {
  const [visible, setVisible] = useState(false);
  const [initLoad, setInitLoad] = useState(false);

  useEffect(() => {
    if (visible && !initLoad) setInitLoad(true);
    setVisible(isActive);
  }, [isActive, visible]);

  return (
    initLoad && (
      <S.Container isActive={isActive}>
        <S.GrayHandler />
        <Text
          label={mainLabel}
          color={'Gray500'}
          typography={'GoThicTitleS'}
          weight={700}
          size={14}
          style={{ margin: '16px 0px' }}
        />
        {subLabel && (
          <Text
            label={subLabel}
            color={'Gray400'}
            typography={'GoThicLabelS'}
            weight={700}
            size={12}
          />
        )}
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
    )
  );
};

export default ApplicationModal;
