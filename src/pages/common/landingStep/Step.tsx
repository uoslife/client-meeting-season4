import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import PageLayout from '~/components/layout/page/PageLayout';
import Row from '~/components/layout/Row';
import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { css } from '@emotion/react';
import QuestionLabel from '~/components/questionPageTemplate/QuestionLabel';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { colors } from '~/styles/colors';
import styled from '@emotion/styled';
import { SOCIAL_LINK } from '~/constants';
import toast, { Toaster } from 'react-hot-toast';
import { navigateNextStepAtom } from '~/models/funnel';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { MeetingAPI, PaymentAPI } from '~/api';
import { isPaymentFinishedAtom } from '~/models/payment';
import { isLoggedInAtom, isUosUserAtom } from '~/models/auth';
import uoslifeBridge from '~/bridge';
import { groupDataAtoms } from '~/models/group/data';
import CleanUpModal from '~/components/modal/cleanUpModal/CleanUpModal';
import {
  commonDataAtoms,
  isUseFramerMotionAtom,
  notificationModalAtom,
} from '~/models/common/data';

const CommonLandingStep = () => {
  const isUoslifeUser = useAtomValue(isUosUserAtom);

  return (
    <PageLayout>
      {isUoslifeUser ? (
        <S.HeaderContainer>
          <Row justify={'space-between'} align={'center'}>
            <IconButton
              iconName={'headerButton-backArrow'}
              width={26}
              height={28}
              onClick={() => uoslifeBridge.goBack()}
            />
            <S.HeaderDummyBox />
          </Row>
        </S.HeaderContainer>
      ) : (
        <S.DummyBox />
      )}
      <PageLayout.DoubleCardBody
        topCardPadding="36px 44px"
        topCardChildren={<TopCardComponent />}
        bottomCardPadding="36px 20px 24px"
        bottomCardChildren={<BottomCardComponent />}
      />
      {<FooterIconAreaComponent />}
      <Toaster />
    </PageLayout>
  );
};

export default CommonLandingStep;

const TopCardComponent = () => {
  return (
    <Col align={'center'} gap={8}>
      <picture css={css``}>
        <img
          alt={'mainPoster'}
          src={'/images/main/poster1.png'}
          width={349}
          height={210}
        />
      </picture>
      <Row
        justify={'center'}
        align={'center'}
        gap={20}
        padding={'7px'}
        css={css`
          border: 1px solid ${colors.Secondary700};
          border-radius: 6px;
        `}>
        <Row justify={'flex-end'}>
          <Text
            label={'Today is . .'}
            color={'Primary500'}
            typography={'NeoTitleM'}
          />
        </Row>
        <Row gap={8}>
          <IconButton iconName={'musicNote-red'} width={20} height={18} />
          <Text
            label={'즐거움'}
            color={'Secondary700'}
            typography={'NeoBodyM'}
          />
        </Row>
      </Row>
    </Col>
  );
};

const BottomCardComponent = () => {
  const navigate = useTypeSafeNavigate();
  const [businessToggleInfo, setBusinessToggleInfo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isUosUserValue = useAtomValue(isUosUserAtom);
  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);
  const setIsUseFramerMotion = useSetAtom(isUseFramerMotionAtom);
  const [isLoggedInValue, setIsLoggedInValue] = useAtom(isLoggedInAtom);
  const [notificationModalValue, setNotificationModalValue] = useAtom(
    notificationModalAtom,
  );
  const isUoslifeUser = useAtomValue(isUosUserAtom);
  const [isPaymentFinishedValue, setIsPaymentFinishedValue] = useAtom(
    isPaymentFinishedAtom,
  );
  const { isLeader } = useAtomValue(groupDataAtoms.groupRoleSelectStep.page1);
  const setChangeUniv = useSetAtom(
    commonDataAtoms.commonUnivVerificationStep.page1,
  );
  const setChangePledge = useSetAtom(
    commonDataAtoms.commonUnivVerificationStep.page2,
  );
  setIsUseFramerMotion(false);

  const setChangeValidationForNumber = useSetAtom(
    commonDataAtoms.commonUnivVerificationStep.page3,
  );

  // 시대생인지 확인
  const checkUosUser = async () => {
    try {
      if (!isUosUserValue) return; // 시대생 앱에서 접근한 경우
      const { accessToken } = await uoslifeBridge.getAccessToken();
      if (accessToken) localStorage.setItem('accessToken', accessToken);
      setIsLoggedInValue(true);
      setChangeUniv({
        univType: 'UOS',
      });
      setChangePledge({
        checked: [true, true],
      });
    } catch (error) {
      setIsLoggedInValue(false);
      throw Error;
    }
  };

  useEffect(() => {
    setChangeValidationForNumber({
      verified: false,
    });
    if (isLoggedInValue) MeetingAPI.createUser();
  }, [isLoggedInValue]);

  // 신청하기 버튼
  const handleOnClickPrimary = () => {
    setNavigateNextStep(true);
    // 시대생에서 접근한 유저는 이메일 인증 없이 바로 미팅 신청 로직
    if (isUoslifeUser) {
      navigate('/common/branchGatewayStep');
      return;
    }
    navigate(
      isLoggedInValue
        ? '/common/branchGatewayStep'
        : '/common/univVerificationStep',
    );
  };

  // 신청 정보 확인하기 버튼
  const handleOnClickSecondary = () => {
    // 3대3 팀원이 버튼을 누르는 경우
    if (isLeader === false) return setIsModalOpen(true);
    navigate('/common/checkAfterAlreadyAppliedStep');
  };

  // 결제완료 여부 확인 로직
  const handlePaymentResult = async () => {
    console.log(isLoggedInValue);
    if (!isLoggedInValue) return;
    await PaymentAPI.verifyPayment()
      .then(() => {
        // 미팅 팀만 생성한 경우(결재 x)
        setIsPaymentFinishedValue(false);
      })
      .catch(error => {
        const { code } = error.response.data;
        // 3대3 팀원이 신청을 완료한 경우
        if (code === 'P01' && isLeader === false) {
          setIsPaymentFinishedValue(true);
          return;
        }
        // 미팅 팀을 생성하지 않은 경우(첫 가입 유저)
        if (code === 'U02' || code === 'P01') setIsPaymentFinishedValue(false);
        // 결제를 완료한 유저
        if (code === 'P04') setIsPaymentFinishedValue(true);
        if (code === 'M06') setIsPaymentFinishedValue(false);
      });
  };

  useEffect(() => {
    checkUosUser().finally(handlePaymentResult);
  }, [isLoggedInValue]);

  // 링크 공유 로직
  const handleShareLink = async () => {
    await navigator.clipboard.writeText(SOCIAL_LINK.Sharelink);
    toast.success('널리 공유해주세요~!', {
      icon: '😁',
    });
  };

  return (
    <Col gap={30}>
      <Col align={'center'} gap={32}>
        <Col align="center" padding={'10px 30px 0 30px'}>
          <img
            alt={'title'}
            width={276}
            height={186}
            src={'/images/main/mainTextLogo.png'}
          />
        </Col>
        <Text
          label={'이번에는 3개 대학이다!\n' + '시립대 경희대 외대의 콜라보~'}
          color={'Secondary900'}
          typography={'NeoBodyM'}
          css={css`
            text-align: center;
          `}
        />
      </Col>
      <Col align={'center'} gap={10}>
        <QuestionLabel>
          <Text
            label={'매칭결과'}
            typography="NeoBodyS"
            size={14}
            color="Primary500"
          />
        </QuestionLabel>
        <Row>
          <Text
            label={'5/27(월) 저녁'}
            typography="NeoBodyL"
            color="Secondary900"
          />
        </Row>
      </Col>
      <Col gap={8} padding={'0 0 10px 0'}>
        {/*{isPaymentFinishedValue ? (*/}
        {/*  <RoundButton*/}
        {/*    status={'cancel'}*/}
        {/*    borderType={'black'}*/}
        {/*    label={'신청 정보 확인하기'}*/}
        {/*    onClick={handleOnClickSecondary}*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  <RoundButton*/}
        {/*    status={'active'}*/}
        {/*    label={'신청하기'}*/}
        {/*    onClick={handleOnClickPrimary}*/}
        {/*  />*/}
        {/*)}*/}
        <RoundButton
          status={'active'}
          label={'매칭 결과 확인하기'}
          onClick={() => navigate('/common/matchingStep')}
        />
      </Col>
      <Col align={'center'} gap={10}>
        <Text
          label={'함께 참여하고 싶은 친구들에게 \n' + '눌러서 공유 !'}
          color={'Secondary800'}
          typography={'NeoBodyS'}
          css={css`
            text-align: center;
          `}
        />
        <IconButton
          onClick={handleShareLink}
          iconName={'share'}
          width={56}
          height={56}
        />
        <Text
          label={'(클릭 시, 공유링크가 복사됩니다)'}
          color={'Gray300'}
          typography={'PretendardRegular'}
          size={12}
        />
      </Col>
      <Col>
        <Row
          align={'center'}
          padding={'20px 0 5px 0'}
          gap={2}
          onClick={() => setBusinessToggleInfo(!businessToggleInfo)}>
          <IconButton
            iconName={'next-icon-black'}
            rotate={businessToggleInfo ? 90 : 0}
            width={12}
            height={12}
          />
          <Text
            label={'사업자 정보'}
            color={'Secondary700'}
            typography={'PFLabelS'}
          />
        </Row>
        <S.BusinessInfo businessToggleInfo={businessToggleInfo}>
          <Col gap={2}>
            <Text
              label={'대표자명: 한유민'}
              color={'Secondary700'}
              typography={'PFLabelS'}
            />
            <Text
              label={'연락처: 010.5748.1040'}
              color={'Secondary700'}
              typography={'PFLabelS'}
            />
            <Text
              label={'사업자번호:111-82-68698'}
              color={'Secondary700'}
              typography={'PFLabelS'}
            />
            <Text
              label={'주소: 서울특별시 동대문구 망우로18가길 43-2, 지층'}
              color={'Secondary700'}
              typography={'PFLabelS'}
            />
          </Col>
        </S.BusinessInfo>
      </Col>
      {isModalOpen && (
        <CleanUpModal
          title={'팅장만 결과를 확인할 수 있습니다.'}
          description={
            '신청 취소를 원하신다면\n' + '팅장이 직접 취소해주셔야 합니다!'
          }
          setIsCleanUpModalOpen={setIsModalOpen}
        />
      )}
      {notificationModalValue && (
        <CleanUpModal
          title={'21일 화요일 신청중 에러가 있었나요?'}
          description={
            '화요일 신청도중 에러를 경험하신 분은\n' +
            '재신청 부탁드리겠습니다 😥'
          }
          setIsCleanUpModalOpen={setNotificationModalValue}
        />
      )}
    </Col>
  );
};
const FooterIconAreaComponent = () => {
  const isUoslifeUser = useAtomValue(isUosUserAtom);
  const [bottomPadding, setInset] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await uoslifeBridge.getInsets();
      setInset(res.bottom);
    })();
  }, []);

  return (
    <Col padding={`0 0 ${isUoslifeUser ? bottomPadding : 7}px 0`}>
      <Row align={'center'} gap={20}>
        <S.SocialLinkContainer href={SOCIAL_LINK.Kakaotalk} target="_blank">
          <Row justify={'flex-end'}>
            <IconButton iconName={'kakaotalk'} width={36} height={36} />
          </Row>
          <Col justify={'center'} gap={4}>
            <Text label={'Kakaotalk'} typography="NeoLabel" color="White" />
            <Text label={'시대생'} typography="PFLabelM" color="White" />
          </Col>
        </S.SocialLinkContainer>
        <S.SocialLinkContainer href={SOCIAL_LINK.Instagram} target="_blank">
          <IconButton iconName={'instagram'} width={42} height={42} />
          <Col justify={'center'} gap={4}>
            <Text label={'Instagram'} typography="NeoLabel" color="White" />
            <Text
              label={'@uoslife_official'}
              typography="PFLabelM"
              color="White"
            />
          </Col>
        </S.SocialLinkContainer>
      </Row>
    </Col>
  );
};

const S = {
  DummyBox: styled.div`
    margin-top: 18px;
  `,
  SocialLinkContainer: styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 6px;
  `,
  BusinessInfo: styled.div<{ businessToggleInfo: boolean }>`
    display: ${({ businessToggleInfo }) =>
      businessToggleInfo ? 'flex' : 'none'};
  `,
  HeaderContainer: styled.header`
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    gap: 16px;
    padding: 8px 8px;
    background: ${colors.Primary500};
    color: ${colors.White};
  `,
  HeaderDummyBox: styled.div`
    height: 24px;
    width: 24px;
  `,
};
