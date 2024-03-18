import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import Row from '~/components/layout/Row';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '~/styles/colors';
import Paddler from '~/components/layout/Pad';
import { commonDataAtoms } from '~/models/common/data';
import { combinedValidatiesAtoms } from '~/models';

const UNIV_SELECTION_LIST = ['KHU', 'HUFS'] as const;

const FirstPage = () => {
  const [pageState, setPageState] = useAtom(
    commonDataAtoms.commonUnivVerificationStep.page1,
  );
  const { univType } = pageState;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonUnivVerificationStep.page1;
  setIsPageFinished(pageValidity);

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Col align={'center'} gap={52}>
        <Text
          label={'본인 학교를 선택해 주세요 (˵^࿄^˵)'}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
        <Row gap={20} justify={'center'}>
          {UNIV_SELECTION_LIST.map((univ, index) => {
            return (
              <UnivSelectContainer
                key={`${univ} - ${index}`}
                isClicked={univType === univ}
                onClick={() => setPageState({ univType: univ })}>
                <IconButton
                  iconName={`univSelection/${univ}`}
                  format={'png'}
                  width={univ === 'KHU' ? 96 : 170}
                  height={130}
                />
                <Text
                  label={univ === 'KHU' ? '경희대학교' : '한국외국어대학교'}
                  color={'Gray300'}
                  typography={'NeoBodyM'}
                />
              </UnivSelectContainer>
            );
          })}
        </Row>
      </Col>
    </Paddler>
  );
};

export default FirstPage;

export const UnivSelectContainer = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
  width: 170px;

  ${({ isClicked }) =>
    isClicked &&
    css`
      border: 2px solid ${colors.Primary500};
      border-radius: 12px;
      background: ${colors.Primary100};
    `}
`;
