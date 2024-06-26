import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import Row from '~/components/layout/Row';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '~/styles/colors';
import Paddler from '~/components/layout/Pad';
import { commonDataAtoms } from '~/models/common/data';
import { combinedValidatiesAtoms } from '~/models';

const UNIV_SELECTION_LIST = ['KHU', 'HUFS', 'UOS'] as const;

const ThirdPage = () => {
  const [pageState, setPageState] = useAtom(
    commonDataAtoms.commonUnivVerificationStep.page1,
  );
  const { univType } = pageState;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonUnivVerificationStep.page1;
  setIsPageFinished(pageValidity);

  const handleSize = (type: string) => {
    switch (type) {
      case 'KHU':
        return 96;
      case 'UOS':
        return 80;
      case 'HUFS':
        return 170;
    }
  };

  const handleText = (type: string) => {
    switch (type) {
      case 'KHU':
        return '경희대';
      case 'UOS':
        return '서울시립대';
      case 'HUFS':
        return '한국외대';
    }
  };

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
                  width={handleSize(univ)}
                  height={130}
                />
                <Text
                  label={handleText(univ)!}
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

export default ThirdPage;

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
