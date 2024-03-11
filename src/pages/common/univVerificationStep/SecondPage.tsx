import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';

const SecondPage = () => {
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    const isAllInputsFilled = true;
    setIsPageFinished(!!isAllInputsFilled);
  }, []);

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
        </Col>
      </Row>
    </Paddler>
  );
};

export default SecondPage;
