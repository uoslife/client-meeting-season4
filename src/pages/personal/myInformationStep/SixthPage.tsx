import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import GridWrapper from '~/components/layout/gridWrapper/GridWrapper';
import { INTEREST, INTEREST_NAME } from '~/constants';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import InterestButton from '~/components/buttons/interestButton/InterestButton';
import { personalDataAtoms } from '~/models/personal/data';
import { combinedValidatiesAtoms } from '~/models';

const SixthPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyInformationStep.page6,
  );

  const { interestOptions } = pageState;

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyInformationStep.page6;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!pageValidity);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={32} align="center">
              <Text
                label={'12. 본인의 관심사를 3가지 선택해 주세요.'}
                color={'Gray500'}
                typography={'NeoTitleM'}
                weight={400}
                size={18}
              />
              <GridWrapper row={4} column={3} rowGap={16}>
                {INTEREST.map((interest, i) => (
                  <InterestButton
                    key={i}
                    interestType={interest}
                    isActive={interestOptions.includes(interest)}
                    label={INTEREST_NAME[interest]}
                    onMouseDown={() => {
                      if (interestOptions.includes(interest))
                        setPageState(prev => ({
                          ...prev,
                          interestOptions: interestOptions.filter(
                            option => option !== interest,
                          ),
                        }));
                      else if (interestOptions.length < 3)
                        setPageState(prev => ({
                          ...prev,
                          interestOptions: [...interestOptions, interest],
                        }));
                    }}
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

export default SixthPage;
