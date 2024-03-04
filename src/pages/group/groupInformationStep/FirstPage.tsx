import { css } from '@emotion/react';
import { useAtom, useSetAtom } from 'jotai';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import GridWrapper from '~/components/layout/gridWrapper/GridWrapper';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import { pageFinishAtom } from '~/store/funnel';
import { groupApplyAtoms } from '~/store/meeting';
import { colorType } from '~/types/style.type';

const TopSayings = () => {
  return (
    <Col gap={12} align="center">
      <Text
        color="Gray500"
        label="선호하는 미팅 요일을 선택해 주세요"
        typography="NeoTitleM"
      />
      <Col align="center">
        <Text
          color="Gray400"
          label="최소 2개 이상 선택해야 하며 요일을 많이 선택할수록"
          typography="GoThicBodyS"
        />
        <Text
          color="Gray400"
          label="원하는 상대와의 매칭 확률이 높아져요."
          typography="GoThicBodyS"
        />
      </Col>
    </Col>
  );
};

const DayCircleButton = ({
  selected,
  label,
  onClick,
}: {
  selected: boolean;
  label: string;
  onClick: () => void;
}) => {
  const imageUrl = selected
    ? '/images/icons/daySelectionCircle-selected.png'
    : '/images/icons/daySelectionCircle-not-selected.png';

  const textColor: colorType = selected ? 'White' : 'Primary500';

  return (
    <div
      css={css`
        background-image: url(${imageUrl});
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: all 0.2s;
      `}
      onClick={onClick}>
      <Text color={textColor} label={label} typography="NeoButtonL" />
    </div>
  );
};

const DAYS = ['월', '화', '수', '목', '금', '토', '일'] as const;

const DaySelector = () => {
  const [preferDay, setPreferDay] = useAtom(
    groupApplyAtoms.groupInfo_preferDay,
  );

  const toggle = (day: (typeof DAYS)[number]) =>
    setPreferDay(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day],
    );

  useSetAtom(pageFinishAtom)(preferDay.length >= 2);

  return (
    <GridWrapper row={2} column={4} rowGap={12}>
      {DAYS.map(day => (
        <DayCircleButton
          key={day}
          label={day}
          selected={preferDay.includes(day)}
          onClick={() => {
            toggle(day);
          }}
        />
      ))}
    </GridWrapper>
  );
};

const FirstPage = () => {
  return (
    <PageLayout.SingleCardBody>
      <Paddler top={36} left={20} right={20}>
        <Col gap={28} align="center">
          <TopSayings />
          <DaySelector />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
