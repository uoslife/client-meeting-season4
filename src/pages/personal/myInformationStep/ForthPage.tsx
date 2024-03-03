import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import GridWrapper from '~/components/layout/gridWrapper/GridWrapper';
import AnimalButton from '~/components/buttons/animalButton/AnimalButton';
import { ANIMALS, ANIMALS_NAME } from '~/constants';
import { useToggleSelect } from '~/hooks/useToggleSelect';
import { useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';

const ForthPage = () => {
  const { selectedValues, select, checkSelectedValues } = useToggleSelect(2);

  const isAllInputsFilled = selectedValues.length > 0;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!isAllInputsFilled);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={32}>
              <Col gap={12} align="center">
                <Text
                  label={'11. 본인과 닮은 동물상을 선택해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col align="center">
                  <Text
                    label={'최대 2개까지 선택이 가능해요'}
                    color={'Gray400'}
                    typography={'PretendardRegular'}
                    weight={400}
                    size={14}
                  />
                </Col>
              </Col>
              <GridWrapper row={3} column={3} rowGap={16}>
                {ANIMALS.map((animal, i) => (
                  <AnimalButton
                    key={i}
                    animalType={animal}
                    isActive={checkSelectedValues(animal)}
                    label={ANIMALS_NAME[animal]}
                    onMouseDown={select(animal)}
                  />
                ))}
              </GridWrapper>
            </Col>
          </Row>
        </Paddler>
      }
    />
  );
};

export default ForthPage;
