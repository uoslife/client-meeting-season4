import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import { commonDataAtoms } from '~/models/common/data';
import { combinedValidatiesAtoms } from '~/models';
import PledgeItem from '~/components/pledgeItem/PledgeItem';

const SecondPage = () => {
  const [pageState, setPageState] = useAtom(
    commonDataAtoms.commonUnivVerificationStep.page2,
  );

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonUnivVerificationStep.page2;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Row>
        <Col gap={12} align="center">
          <Text
            label={'웹메일, 전화번호 보안 서약'}
            color={'Gray500'}
            typography={'NeoTitleM'}
            weight={400}
            size={18}
          />
          <Col align="center">
            <Text
              label={
                '‘시대팅X트로이카’는 시립대, 경희대, 한국외대 학생들에게만 제공되는 서비스입니다.'
              }
              color={'Gray400'}
              typography={'GoThicBodyS'}
              weight={400}
              size={14}
              css={css`
                text-align: center;
              `}
            />
            <Text
              label={
                '웹메일 또는 전화번호를 타인에게 양도하거나 도용하는 경우, 향후 서비스 이용에 불이익을 받을 수 있습니다. '
              }
              color={'Primary500'}
              typography={'GoThicBodyS'}
              weight={400}
              size={14}
              css={css`
                text-align: center;
              `}
            />
          </Col>
          <Col gap={23} align="center">
            <PledgeItem
              title={
                '타인에게 나의 웹메일, 카카오톡 ID, 전화번호를 양도하지 않을게요.'
              }
              checked={pageState.checked[0]}
              onClick={() =>
                setPageState(prev => ({
                  checked: [!prev.checked[0], prev.checked[1]],
                }))
              }
            />
            <PledgeItem
              title="타인의 웹메일, 카카오톡 ID, 전화번호를 도용/대여하지 않을게요. "
              checked={pageState.checked[1]}
              onClick={() =>
                setPageState(prev => ({
                  checked: [prev.checked[0], !prev.checked[1]],
                }))
              }
            />
          </Col>
        </Col>
      </Row>
    </Paddler>
  );
};

export default SecondPage;
