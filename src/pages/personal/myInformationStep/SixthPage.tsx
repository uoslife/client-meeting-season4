import PageLayout from '~/components/layout/page/PageLayout';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import GridWrapper from '~/components/layout/gridWrapper/GridWrapper';
import { INTEREST, INTEREST_NAME } from '~/constants';
import { useToggleSelect } from '~/hooks/useToggleSelect';
import { useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import InterestButton from '~/components/buttons/interestButton/InterestButton';

const SixthPage = () => {
  const { selectedValues, select, checkSelectedValues } = useToggleSelect(3);

  const isAllInputsFilled = selectedValues.length === 3;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!isAllInputsFilled);

  return (
    <PageLayout.SingleCardBody
      cardPadding="36px 20px 124px 20px"
      children={
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
                  isActive={checkSelectedValues(interest)}
                  label={INTEREST_NAME[interest]}
                  onMouseDown={select(interest)}
                />
              ))}
            </GridWrapper>
          </Col>
        </Row>
      }
    />
  );
};

export default SixthPage;
