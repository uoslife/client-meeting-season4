import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import usePersonalEntireValue from '~/hooks/usePersonalEntireValue';
import { useAtomValue } from 'jotai';
import { meetingTypeAtom, univTypeAtom } from '~/store/meeting';
import { ApplyInfoCustomDoubleCardProps } from '~/components/applyInfo/CustomDoubleCard';
import useGroupEntireValue from '~/hooks/useGroupEntireValue';
import RawIntoView from '~/utils/converters/RawIntoView';

const usePersonal = (): ApplyInfoCustomDoubleCardProps => {
  const personalEntireValue = usePersonalEntireValue();
  const univ = useAtomValue(univTypeAtom)!;

  const { directoryViewItems: topCardItems, profileProps } =
    RawIntoView.personal_info(
      { ...personalEntireValue, univ },
      { itemsIncludeKakaoId: true },
    );

  const { directoryViewItems: bottomCardItems } = RawIntoView.personal_prefer({
    ...personalEntireValue,
  });

  return {
    topCardProps: {
      cardTopLabel: '내 정보',
      directoryViewItems: topCardItems,
      profileProps,
    },
    bottomCardProps: {
      directoryViewItems: bottomCardItems,
    },
  };
};

const useGroup = (): ApplyInfoCustomDoubleCardProps => {
  const groupEntireValue = useGroupEntireValue();
  const univ = useAtomValue(univTypeAtom)!;

  const { directoryViewItems: topCardItems, profileProps } =
    RawIntoView.group_info(
      { ...groupEntireValue, univ },
      {
        itemsIncludeKakaoId: true,
      },
    );

  const { directoryViewItems: bottomCardItems } =
    RawIntoView.group_prefer(groupEntireValue);

  return {
    topCardProps: {
      directoryViewItems: topCardItems,
      cardTopLabel: '우리 팅 정보',
      profileProps,
    },
    bottomCardProps: {
      directoryViewItems: bottomCardItems,
    },
  };
};

const FirstPage = () => {
  const meetingType = useAtomValue(meetingTypeAtom)!;
  const ApplyInfoCustomDoubleCardProps = {
    personal: usePersonal(),
    group: useGroup(),
  }[meetingType];

  return (
    <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0 80px">
      <Paddler left={5} right={5} top={24}>
        <Col gap={16}>
          <ApplyInfo.CheckPageTopSaying />
          <ApplyInfo.CustomDoubleCard {...ApplyInfoCustomDoubleCardProps} />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
