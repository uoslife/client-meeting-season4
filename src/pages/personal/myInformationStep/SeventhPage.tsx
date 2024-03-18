import { css } from '@emotion/react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import TextArea from '~/components/inputs/textarea/TextArea';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { pageFinishAtom } from '~/models/funnel';

const TopSayings = () => {
  return (
    <Col gap={12} align="center">
      <Text
        color="Gray500"
        label="15. 상대에게 전하는 첫 메시지예요."
        typography="NeoTitleM"
      />
      <Text
        color="Gray400"
        label={
          '상대가 우리의 어떤 점을 알면 좋을까요? \n (10자 이상 작성해주세요.)'
        }
        typography="GoThicBodyS"
      />
    </Col>
  );
};

const SeventhPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyInformationStep.page7,
  );

  const { message } = pageState;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyInformationStep.page7;
  setIsPageFinished(!!pageValidity);

  return (
    <PageLayout.SingleCardBody>
      <Paddler
        css={css`
          flex: 1;
        `}
        top={36}
        right={20}
        bottom={24}
        left={20}>
        <Col
          align="center"
          css={css`
            flex: 1;
          `}
          gap={32}>
          <TopSayings />
          <TextArea
            reset={() => {
              setPageState(prev => ({ ...prev, message: '' }));
            }}
            onChange={e =>
              setPageState(prev => ({ ...prev, message: e.target.value }))
            }
            value={message}
            placeholder={'ex. 내가 좋아하는 것들은 어떤 게 있나요?'}
          />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default SeventhPage;
