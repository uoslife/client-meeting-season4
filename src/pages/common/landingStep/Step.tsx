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
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import { isPaymentFinishedAtom } from '~/models/payment';

type bottomCardChildrenProps = {
  onClickPrimary: () => void;
  onClickSecondary: () => void;
};
const CommonLandingStep = () => {
  const navigate = useTypeSafeNavigate();
  const setNavigateNextStep = useSetAtom(navigateNextStepAtom);

  const handleOnClickPrimary = () => {
    setNavigateNextStep(true);
    navigate('/common/univVerificationStep');
    // TODO : 이메일 토큰 인증 여부에 따라 라우팅 페이지 분기 처리
  };
  const handleOnClickSecondary = () => {
    navigate('/common/verifyForCheckAfterAlreadyAppliedStep');
    // TODO : 신청 정보 확인하기 페이지로 라우팅
  };

  return (
    <PageLayout>
      <S.HeaderDummyBox />
      <PageLayout.DoubleCardBody
        topCardPadding="36px 44px"
        topCardChildren={<TopCardComponent />}
        bottomCardPadding="36px 20px 24px"
        bottomCardChildren={
          <BottomCardComponent
            onClickPrimary={handleOnClickPrimary}
            onClickSecondary={handleOnClickSecondary}
          />
        }
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

const BottomCardComponent = ({
  onClickPrimary,
  onClickSecondary,
}: bottomCardChildrenProps) => {
  const [businessToggle, setBusinessToggle] = useState(false);
  const isPaymentFinishedValue = useAtomValue(isPaymentFinishedAtom);
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
            // width={276}
            // height={186}
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
            label={'신청기간'}
            typography="NeoBodyS"
            size={14}
            color="Primary500"
          />
        </QuestionLabel>
        <Row>
          <Text
            label={'4/24(월) - 4/28(수)'}
            typography="NeoBodyL"
            color="Secondary900"
          />
        </Row>
      </Col>
      <Col gap={8} padding={'0 0 10px 0'}>
        {isPaymentFinishedValue ? (
          <RoundButton
            status={'cancel'}
            borderType={'black'}
            label={'신청 정보 확인하기'}
            onClick={onClickSecondary}
          />
        ) : (
          <RoundButton
            status={'active'}
            label={'신청하기'}
            onClick={onClickPrimary}
          />
        )}
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
          onClick={() => setBusinessToggle(!businessToggle)}>
          <IconButton
            iconName={'next-icon-black'}
            rotate={businessToggle ? 90 : 0}
            width={12}
            height={12}
          />
          <Text
            label={'사업자 정보'}
            color={'Secondary700'}
            typography={'PFLabelS'}
          />
        </Row>
        <S.BusinessInfo businessToggle={businessToggle}>
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
    </Col>
  );
};
const FooterIconAreaComponent = () => {
  return (
    <Col>
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
  HeaderDummyBox: styled.div`
    margin-top: 18px;
  `,
  SocialLinkContainer: styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 6px;
  `,
  BusinessInfo: styled.div<{ businessToggle: boolean }>`
    display: ${({ businessToggle }) => (businessToggle ? 'flex' : 'none')};
  `,
};
