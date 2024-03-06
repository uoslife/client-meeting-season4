import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import MbtiButton from '~/components/buttons/mbtiButton/MbtiButton';
import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';
import { useToggleSelect } from '~/hooks/useToggleSelect';

const ForthPage = () => {
  const storedMbti = localStorage.getItem('personalInfo_mbti');
  const parsedMbti = storedMbti === null ? [] : JSON.parse(storedMbti);
  const {
    selectedValues: mbti,
    select: selectMbti,
    checkSelectedValues: checkMbti,
  } = useToggleSelect<string>(8, parsedMbti);
  const [, setMbti] = useAtom(personalApplyAtoms.personalInfo_mbti);

  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setMbti(mbti);
    const isAllInputsFilled =
      (checkMbti('E') || checkMbti('I')) &&
      (checkMbti('S') || checkMbti('N')) &&
      (checkMbti('T') || checkMbti('F')) &&
      (checkMbti('J') || checkMbti('P'));
    setIsPageFinished(!!isAllInputsFilled);
  }, [mbti]);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={32}>
              <Col gap={8} align="center">
                <Text
                  label={'9. 선호하는 상대의 MBTI를 선택해 주세요'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col align="center">
                  <Text
                    label={
                      '특정 MBTI를 선택하는 것이 아닌 선호하는 유형을 모두 선택해 주세요. (ex. S, N 중복 선택 가능)'
                    }
                    color={'Secondary800'}
                    typography={'PretendardRegular'}
                    weight={400}
                    size={14}
                  />
                </Col>
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 처음 보는 사람을 만났을 때 상대는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={checkMbti('E') ? 'active' : 'inactive'}
                    alphabet={'E'}
                    label={'외향적'}
                    onClick={() => selectMbti('E')()}
                  />
                  <MbtiButton
                    status={checkMbti('I') ? 'active' : 'inactive'}
                    alphabet={'I'}
                    label={'내향적'}
                    onClick={() => selectMbti('I')()}
                  />
                </Row>
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 문제를 해결할 때 상대는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={checkMbti('S') ? 'active' : 'inactive'}
                    alphabet={'S'}
                    label={'현실적'}
                    onClick={() => selectMbti('S')()}
                  />
                  <MbtiButton
                    status={checkMbti('N') ? 'active' : 'inactive'}
                    alphabet={'N'}
                    label={'직관적'}
                    onClick={() => selectMbti('N')()}
                  />
                </Row>
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 애인이 어려움에 처했을 때 상대는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={checkMbti('T') ? 'active' : 'inactive'}
                    alphabet={'T'}
                    label={'이성적'}
                    onClick={() => selectMbti('T')()}
                  />
                  <MbtiButton
                    status={checkMbti('F') ? 'active' : 'inactive'}
                    alphabet={'F'}
                    label={'감성적'}
                    onClick={() => selectMbti('F')()}
                  />
                </Row>
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 데이트할 때 상대는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={checkMbti('J') ? 'active' : 'inactive'}
                    alphabet={'J'}
                    label={'계획적'}
                    onClick={() => selectMbti('J')()}
                  />
                  <MbtiButton
                    status={checkMbti('P') ? 'active' : 'inactive'}
                    alphabet={'P'}
                    label={'즉흥적'}
                    onClick={() => selectMbti('P')()}
                  />
                </Row>
              </Col>
            </Col>
          </Row>
        </Paddler>
      }
    />
  );
};

export default ForthPage;
