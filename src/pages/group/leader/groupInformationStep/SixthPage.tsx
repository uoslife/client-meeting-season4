import { useAtom } from 'jotai';
import PageLayout from '~/components/layout/page/PageLayout';
import { personalApplyAtoms } from '~/store/meeting';
import TextArea from '~/components/inputs/textarea/TextArea';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';

const TopSayings = () => {
  return (
    <Col gap={12} align="center">
      <Text
        color="Gray500"
        label="상대에게 전하는 첫 메시지예요."
        typography="NeoTitleM"
      />
      <Text
        color="Gray400"
        label="상대가 우리의 어떤 점을 알면 좋을까요?"
        typography="GoThicBodyS"
      />
    </Col>
  );
};

// 상대에게 전하는 첫 메시지에요.
const SixthPage = () => {
  const [message, setMessage] = useAtom(personalApplyAtoms.myInfo_message);

  return (
    <PageLayout.SingleCardBody cardPadding="0 0 160px">
      <Paddler
        css={css`
          flex: 1;
        `}
        top={36}
        right={20}
        left={20}>
        <Col
          align="center"
          css={css`
            flex: 1;
          `}
          gap={32}>
          <TopSayings />
          <TextArea
            onChange={e => setMessage(e.target.value)}
            value={message}
            placeholder={
              'ex. 우리가 좋아하는 것들은 어떤 게 있나요?\n(10자 이상 작성해주세요.)'
            }
          />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default SixthPage;
