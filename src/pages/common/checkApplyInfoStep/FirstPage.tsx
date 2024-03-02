import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import usePersonalEntireValue from '~/hooks/usePersonalEntireValue';
import { useAtomValue } from 'jotai';
import { meetingTypeAtom, univTypeAtom } from '~/store/meeting';
import { CustomDoubleCardProps } from '~/components/applyInfo/CustomDoubleCard';
import useGroupEntireValue from '~/hooks/useGroupEntireValue';
import RawIntoView from '~/utils/converters/RawIntoView';

const usePersonalDoubleCardProps = (): CustomDoubleCardProps => {
  const personalEntireValue = usePersonalEntireValue();
  const univ = useAtomValue(univTypeAtom)!;

  const { directoryStyledInfoItems: topCardItems, ...profileProps } =
    RawIntoView.personal_info(
      { ...personalEntireValue, univ },
      { itemsIncludeKakaoId: true },
    );

  const { directoryStyledInfoItems: bottomCardItems } =
    RawIntoView.personal_prefer({
      ...personalEntireValue,
    });

  return {
    meetingType: 'personal',
    ...profileProps,
    topCardItems,
    bottomCardItems,
  };
};

const useGroupDoubleCardProps = (): CustomDoubleCardProps => {
  const groupEntireValue = useGroupEntireValue();

  const { directoryStyledInfoItems: topCardItems, ...profileProps } =
    RawIntoView.group_info(groupEntireValue, {
      itemsIncludeKakaoId: true,
    });

  const { directoryStyledInfoItems: bottomCardItems } =
    RawIntoView.group_prefer(groupEntireValue);

  return {
    meetingType: 'group',
    ...profileProps,
    topCardItems,
    bottomCardItems,
  };
};

const FirstPage = () => {
  const meetingType = useAtomValue(meetingTypeAtom)!;
  const customDoubleCardProps = {
    personal: usePersonalDoubleCardProps(),
    group: useGroupDoubleCardProps(),
  }[meetingType];

  return (
    <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0 80px">
      <Paddler left={5} right={5} top={24}>
        <Col gap={16}>
          <ApplyInfo.CheckPageTopSaying />
          <ApplyInfo.CustomDoubleCard {...customDoubleCardProps} />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
