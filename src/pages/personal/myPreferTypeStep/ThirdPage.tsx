import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import GridWrapper from '~/components/layout/gridWrapper/GridWrapper';
import AnimalButton from '~/components/buttons/animalButton/AnimalButton';
import { ANIMALS, ANIMALS_NAME } from '~/constants';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import { personalDataAtoms } from '~/models/personal/data';
import { combinedValidatiesAtoms } from '~/models';

const ThirdPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalPreferInfoStep.page3,
  );
  const { animalOptions } = pageState;

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalPreferInfoStep.page3;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!pageValidity);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={32}>
              <Col gap={12} align="center">
                <Text
                  label={'8. 선호하는 상대의 동물상을 선택해 주세요.'}
                  color={'Secondary900'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col align="center">
                  <Text
                    label={'개수 상관없이 복수 선택이 가능해요.'}
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
                    isActive={animalOptions.includes(animal)}
                    label={ANIMALS_NAME[animal]}
                    onMouseDown={() =>
                      setPageState(prev => {
                        const newOptions = prev.animalOptions.includes(animal)
                          ? prev.animalOptions.filter(a => a !== animal)
                          : [...prev.animalOptions, animal];
                        return { ...prev, animalOptions: newOptions };
                      })
                    }
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
