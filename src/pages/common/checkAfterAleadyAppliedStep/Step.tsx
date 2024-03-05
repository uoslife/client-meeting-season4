import { css } from '@emotion/react';
import { useAtomValue } from 'jotai';
import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import { ApplyInfoCustomDoubleCardProps } from '~/components/applyInfo/CustomDoubleCard';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import { univTypeAtom } from '~/store/meeting';
import RawIntoViewConverters from '~/utils/RawIntoViewConverters';
import { PersonalInfoRawDataType } from '~/utils/RawIntoViewConverters/types/info.type';
import { PersonalPreferRawDataType } from '~/utils/RawIntoViewConverters/types/prefer.type';

const usePersonal = (): ApplyInfoCustomDoubleCardProps => {
  // TODO: Replace mocks with personalEntireValue
  // const personalEntireValue = usePersonalEntireValue();
  const mockPersonalInfoRawData: PersonalInfoRawDataType = {
    myInfo_age: 25,
    myInfo_gender: 'Male',
    myInfo_height: 180,
    myInfo_major: 'Computer Science',
    myInfo_studentType: 'Undergraduate',
    myInfo_kakaoId: 'john_doe',
    myInfo_nickname: 'John',
    personalInfo_smoking: 'No',
    personalInfo_drink: ['Occasionally'],
    personalInfo_interests: ['Coding', 'Reading'],
    personalInfo_animal: ['Dog'],
    personalInfo_mbti: ['INTJ'],
    personalInfo_question: Array.from({ length: 5 }, (_, i) => ({
      label: `Answer ${i + 1}`,
      order: i,
    })),
    univ: 'HUFS',
  };
  const univ = useAtomValue(univTypeAtom)!;

  const { directoryViewItems: topCardItems, profileViewData } =
    RawIntoViewConverters.personalInfo(
      { ...mockPersonalInfoRawData, univ },
      { profileItemsIncludeKakaoId: true },
    );

  const mockPersonalPreferRawData: PersonalPreferRawDataType = {
    personalPrefer_age: ['20-25'],
    personalPrefer_height: ['175-180'],
    personalPrefer_studentType: ['Undergraduate'],
    personalPrefer_univ: ['HUFS'],
    personalPrefer_drink: ['Occasionally'],
    personalPrefer_smoking: 'No',
    personalPrefer_animal: ['Dog'],
    personalPrefer_mbti: ['INTJ'],
  };
  const { directoryViewItems: bottomCardItems } =
    RawIntoViewConverters.personalPrefer(mockPersonalPreferRawData);

  return {
    topCardProps: {
      cardTopLabel: '내 정보',
      directoryViewItems: topCardItems,
      profileViewData,
    },
    bottomCardProps: {
      directoryViewItems: bottomCardItems,
    },
  };
};

const BottomSayingsAndCancelButton = ({
  onClickCancleButton,
}: {
  onClickCancleButton: () => void;
}) => (
  <Col gap={8}>
    <Col align="center">
      <Text
        css={css`
          text-align: center;
        `}
        label="참여에 문제가 생겼다면, 기한 내에 신청 취소를 눌러주세요."
        color="Gray500"
        typography="GoThicBodyS"
      />
      <Text
        label="(신청 취소 기한 : n월 n일 오후 nn시까지)"
        color="Gray500"
        typography="GoThicBodyS"
      />
    </Col>
    <Paddler left={20} right={20}>
      <RoundButton
        status="inactive"
        borderType="black"
        label=""
        onClick={onClickCancleButton}>
        <Text label="신청 취소" color="Gray500" typography="NeoButtonL" />
        <img
          color="black"
          src="\images\icons\next-icon-black.svg"
          alt="arrowLeft"
        />
      </RoundButton>
    </Paddler>
  </Col>
);

const CheckAfterAleadyAppliedStep = () => {
  // TODO: 아래 주석 해제하고 API로 교체

  const savedViewInfo = usePersonal();
  // const navigate = useNavigate();

  // // 저장된 정보가 없다면 인증 페이지로 리다이렉트
  // if (!savedViewInfo) {
  //   // TODO: 인증 페이지로 수정
  //   navigate('/common/verifyForCheckAfterAleadyAppliedStep');
  //   return null;
  // }

  return (
    <PageLayout>
      <PageLayout.Header title="신청 정보" />
      <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0">
        <Paddler left={5} right={5} bottom={20}>
          <Col gap={44} align="center">
            <ApplyInfo.CustomDoubleCard {...savedViewInfo} />
            <BottomSayingsAndCancelButton onClickCancleButton={() => {}} />
          </Col>
        </Paddler>
      </PageLayout.SingleCardBody>
    </PageLayout>
  );
};

export default CheckAfterAleadyAppliedStep;
