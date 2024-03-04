import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import GridWrapper from '~/components/layout/gridWrapper/GridWrapper';
import AnimalButton from '~/components/buttons/animalButton/AnimalButton';
import { ANIMALS, ANIMALS_NAME } from '~/constants';
import { useToggleSelect } from '~/hooks/useToggleSelect';
import { useAtom, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { useEffect } from 'react';
import { personalApplyAtoms } from '~/store/meeting';

const ThirdPage = () => {
  const storedAnimal = localStorage.getItem('personalPrefer_animal');
  const parsedAnimal = storedAnimal === null ? [] : JSON.parse(storedAnimal);
  const {
    selectedValues: animal,
    select: selectAnimal,
    checkSelectedValues: checkAnimal,
  } = useToggleSelect<string>(9, parsedAnimal);
  const [, setAnimal] = useAtom(personalApplyAtoms.personalPrefer_animal);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setAnimal(animal);
    const isAllInputsFilled = animal.length > 0;
    setIsPageFinished(!!isAllInputsFilled);
  }, [animal]);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={32}>
              <Col gap={12} align="center">
                <Text
                  label={'8. 선호하는 상대의 동물상을 선택해 주세요'}
                  color={'Secondary900'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col align="center">
                  <Text
                    label={'개수 상관없이 복수 선택이 가능해요'}
                    color={'Secondary800'}
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
                    isActive={checkAnimal(animal)}
                    label={ANIMALS_NAME[animal]}
                    onMouseDown={selectAnimal(animal)}
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

export default ThirdPage;
