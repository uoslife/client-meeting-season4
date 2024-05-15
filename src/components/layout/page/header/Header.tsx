import * as S from './Header.style';
import Row from '~/components/layout/Row';
import { useNavigate } from 'react-router-dom';
import IconButton from '~/components/buttons/iconButton/IconButton';
import Text from '~/components/typography/Text';
import Pad from '~/components/layout/Pad';
import CleanUpModal from '~/components/modal/cleanUpModal/CleanUpModal';
import { useState } from 'react';
import GuidePopUp from '~/components/modal/guidePopUp/GuidePopUp';
import { MeetingAPI } from '~/api';
import toast from 'react-hot-toast';
import { useSetImmerAtom } from 'jotai-immer';
import { groupDataAtoms } from '~/models/group/data';
import { isLoggedInAtom } from '~/models/auth';
import { useSetAtom } from 'jotai';
import { commonDataAtoms } from '~/models/common/data';

export type HeaderProps = {
  title: string;
  isBackArrow?: boolean;
  backArrowNavigate?: string;
  isProgress?: boolean;
  totalStep?: number;
  currentStep?: number;
  showGuidePopUp?: boolean;
  showErrorButton?: boolean;
};

const Header = ({
  title,
  isBackArrow = false,
  backArrowNavigate = '/common/branchGatewayStep',
  isProgress = false,
  currentStep,
  totalStep,
  showGuidePopUp = false,
  showErrorButton = true,
}: HeaderProps) => {
  const navigate = useNavigate();
  const [isCleanUpModalOpen, setIsCleanUpModalOpen] = useState(false);
  const [isGuidePopUpOpen, setIsGuidePopUpOpen] = useState(showGuidePopUp);
  const setLogInValue = useSetAtom(isLoggedInAtom);

  const setAuthPhoneVerification = useSetImmerAtom(
    commonDataAtoms.commonUnivVerificationStep.page3,
  );
  const setGroupMemberParticipate = useSetImmerAtom(
    groupDataAtoms.groupMemberParticipateStep.page1,
  );
  const setGroupLeaderGroupCreate = useSetImmerAtom(
    groupDataAtoms.groupLeaderGroupCreateStep.page2,
  );

  const handleDeleteUser = async () => {
    try {
      await MeetingAPI.deleteUser();
    } catch (e) {
      toast.error('팅을 아직 만들지 않으셨나요?!');
      throw Error;
    }
  };

  const handleReset = async () => {
    await handleDeleteUser();
    setLogInValue(false);
    setGroupMemberParticipate(() => ({
      verified: false,
    }));
    setGroupLeaderGroupCreate(() => ({
      joinCode: null,
      otherMembers: [null, null, null],
    }));
    setAuthPhoneVerification(() => ({
      verified: false,
    }));
    navigate('/');
  };

  return (
    <>
      <S.Container isProgress={isProgress}>
        <Pad left={8} right={8}>
          <Row justify={'space-between'} align={'center'}>
            <IconButton
              iconName={
                isBackArrow ? 'headerButton-backArrow' : 'headerButton-home'
              }
              width={24}
              height={25.5}
              onClick={() =>
                isBackArrow ? navigate(backArrowNavigate) : navigate('/')
              }
            />
            <Text label={title} color={'White'} typography={'NeoTitleM'} />
            {showErrorButton ? (
              <S.ErrorButtonContainer>
                <IconButton
                  iconName={'errorButton'}
                  format={'png'}
                  width={32}
                  height={34}
                  onClick={() => setIsCleanUpModalOpen(true)}
                />
                {isGuidePopUpOpen && (
                  <GuidePopUp
                    label={'에러가 발생하면 이 버튼을 눌러보세요!'}
                    setIsCleanUpModalOpen={setIsGuidePopUpOpen}
                  />
                )}
              </S.ErrorButtonContainer>
            ) : (
              <S.DummyBox />
            )}
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
      {isCleanUpModalOpen && (
        <CleanUpModal
          onClick={handleReset}
          setIsCleanUpModalOpen={setIsCleanUpModalOpen}
          title={'에러가 발생하셨나요?!'}
          description={'아래 확인 버튼을 누른 후\n' + ' 다시 신청해주세요!'}
        />
      )}
    </>
  );
};

export default Header;
