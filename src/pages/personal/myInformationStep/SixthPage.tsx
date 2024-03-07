import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import GridWrapper from '~/components/layout/gridWrapper/GridWrapper';
import { INTEREST, INTEREST_NAME } from '~/constants';
import { useToggleSelect } from '~/hooks/useToggleSelect';
import { useAtom, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import InterestButton from '~/components/buttons/interestButton/InterestButton';
import { useEffect } from 'react';
import { personalApplyAtoms } from '~/store/meeting';

const SixthPage = () => {
  const storedInterest = localStorage.getItem('personalInfo_interests');
  const parsedInterest =
    storedInterest === null ? [] : JSON.parse(storedInterest);
  const {
    selectedValues: interest,
    select: selectInterest,
    checkSelectedValues: checkInterest,
  } = useToggleSelect<string>(3, parsedInterest);
  const [, setInterests] = useAtom(personalApplyAtoms.personalInfo_interests);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setInterests(interest);
    const isAllInputsFilled = interest.length === 3;
    setIsPageFinished(!!isAllInputsFilled);
  }, [interest]);

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
                    isActive={checkInterest(interest)}
                    label={INTEREST_NAME[interest]}
                    onMouseDown={selectInterest(interest)}
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
