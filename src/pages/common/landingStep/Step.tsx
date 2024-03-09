import { useNavigate } from 'react-router-dom';
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

type bottomCardChildrenProps = {
  onClickPrimary: () => void;
  onClickSecondary: () => void;
};
const LandingStep = () => {
  const navigate = useNavigate();

  const handleOnClickPrimary = () => navigate('/common/univVerificationStep');
  const handleOnClickSecondary = () => navigate('/common/univVerificationStep');

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
    </PageLayout>
  );
};

export default LandingStep;

const TopCardComponent = () => {
  return (
    <Col align={'center'} gap={8}>
      <picture
        css={css`
          border: 1px solid ${colors.Secondary700};
        `}>
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
  return (
    <Col gap={30}>
      <Col align={'center'} gap={32}>
        <picture>
          <img
            alt={'mainPoster2'}
            src={'/images/main/poster2.png'}
            width={'100%'}
            height={99}
          />
        </picture>
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
            label={'9/25(월) - 9/27(수)'}
            typography="NeoBodyL"
            color="Secondary900"
          />
        </Row>
      </Col>
      <Col gap={8} padding={'0 0 10px 0'}>
        <RoundButton
          status={'active'}
          label={'신청하기'}
          onClick={onClickPrimary}
        />
        <RoundButton
          status={'cancel'}
          borderType={'black'}
          label={'신청 정보 확인하기'}
          onClick={onClickSecondary}
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
        <IconButton iconName={'share'} width={56} height={56} />
        <Text
          label={'(클릭 시 공유링크가 복사됩니다)'}
          color={'Gray300'}
          typography={'PretendardRegular'}
          size={12}
        />
      </Col>
    </Col>
  );
};
const FooterIconAreaComponent = () => {
  return (
    <Row align={'center'} justify={'center'} gap={20} padding={'0 0 2px 0'}>
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
};
