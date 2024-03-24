import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import MbtiButton from '~/components/buttons/mbtiButton/MbtiButton';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import { personalDataAtoms } from '~/models/personal/data';
import { combinedValidatiesAtoms } from '~/models';

const Fifthpage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyInformationStep.page5,
  );

  const { mbti } = pageState;

  const getMbtiStatus = (value: string): 'active' | 'inactive' =>
    mbti.includes(value) ? 'active' : 'inactive';
  const onClickMbtiButton = (value: string) => () => {
    setPageState(prev => {
      let newMbtis = prev.mbti;
      switch (value) {
        case 'E':
        case 'I':
          newMbtis = newMbtis.replace(/[EI]/g, '');
          break;
        case 'N':
        case 'S':
          newMbtis = newMbtis.replace(/[NS]/g, '');
          break;
        case 'T':
        case 'F':
          newMbtis = newMbtis.replace(/[TF]/g, '');
          break;
        case 'P':
        case 'J':
          newMbtis = newMbtis.replace(/[PJ]/g, '');
          break;
      }
      newMbtis += value;
      return { mbti: newMbtis };
    });
  };

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyInformationStep.page5;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!pageValidity);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={32}>
              <Col align="center">
                <Text
                  label={'12. 본인의 MBTI를 선택해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoButtonL'}
                  weight={400}
                  size={18}
                />
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 처음 보는 사람을 만났을 때 나는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={getMbtiStatus('E')}
                    alphabet={'E'}
                    label={'외향적'}
                    onClick={onClickMbtiButton('E')}
                  />
                  <MbtiButton
                    status={getMbtiStatus('I')}
                    alphabet={'I'}
                    label={'내향적'}
                    onClick={onClickMbtiButton('I')}
                  />
                </Row>
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 문제를 해결할 때 나는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={getMbtiStatus('S')}
                    alphabet={'S'}
                    label={'현실적'}
                    onClick={onClickMbtiButton('S')}
                  />
                  <MbtiButton
                    status={getMbtiStatus('N')}
                    alphabet={'N'}
                    label={'직관적'}
                    onClick={onClickMbtiButton('N')}
                  />
                </Row>
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 애인이 어려움에 처했을 때 나는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={getMbtiStatus('T')}
                    alphabet={'T'}
                    label={'이성적'}
                    onClick={onClickMbtiButton('T')}
                  />
                  <MbtiButton
                    status={getMbtiStatus('F')}
                    alphabet={'F'}
                    label={'감성적'}
                    onClick={onClickMbtiButton('F')}
                  />
                </Row>
              </Col>
              <Col gap={8}>
                <Text
                  label={'Q. 데이트할 때 나는'}
                  color={'Secondary800'}
                  typography={'PretendardRegular'}
                  weight={400}
                  size={14}
                />
                <Row gap={12}>
                  <MbtiButton
                    status={getMbtiStatus('J')}
                    alphabet={'J'}
                    label={'계획적'}
                    onClick={onClickMbtiButton('J')}
                  />
                  <MbtiButton
                    status={getMbtiStatus('P')}
                    alphabet={'P'}
                    label={'즉흥적'}
                    onClick={onClickMbtiButton('P')}
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

export default Fifthpage;
