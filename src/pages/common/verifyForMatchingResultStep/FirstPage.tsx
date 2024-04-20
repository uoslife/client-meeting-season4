import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import IconButton from '~/components/buttons/iconButton/IconButton';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import { combinedValidatiesAtoms } from '~/models';
import { commonDataAtoms } from '~/models/common/data';
import { pageFinishAtom } from '~/models/funnel';
import { UnivSelectContainer } from '../univVerificationStep/FirstPage';

const UNIV_SELECTION_LIST = ['KHU', 'HUFS'] as const;

const FirstPage = () => {
  const [pageState, setPageState] = useAtom(
    commonDataAtoms.commonVerifyForMatchingResultStep.page1,
  );
  const { univType } = pageState;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonVerifyForMatchingResultStep.page1;
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
