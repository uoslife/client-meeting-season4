import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import MbtiButton from '~/components/buttons/mbtiButton/MbtiButton';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';
import { useImmerAtom } from 'jotai-immer';

const Fifthpage = () => {
  const [mbti, setMbti] = useImmerAtom(personalApplyAtoms.personalInfo_mbti);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  const updateMbti = (order: number, changeMbti: string) => {
    setMbti(prevMbti => {
      const newMbti = [...prevMbti];
      newMbti[order] = changeMbti;
      return newMbti;
    });
  };

  useEffect(() => {
    const isAllInputsFilled = mbti[0] && mbti[1] && mbti[2] && mbti[3];
    setIsPageFinished(!!isAllInputsFilled);
  }, [mbti]);

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
                  typography={'NeoTitleM'}
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
                    status={mbti[0] === 'E' ? 'active' : 'inactive'}
                    alphabet={'E'}
                    label={'외향적'}
                    onClick={() => updateMbti(0, 'E')}
                  />
                  <MbtiButton
                    status={mbti[0] === 'I' ? 'active' : 'inactive'}
                    alphabet={'I'}
                    label={'내향적'}
                    onClick={() => updateMbti(0, 'I')}
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
                    status={mbti[1] === 'S' ? 'active' : 'inactive'}
                    alphabet={'S'}
                    label={'현실적'}
                    onClick={() => updateMbti(1, 'S')}
                  />
                  <MbtiButton
                    status={mbti[1] === 'N' ? 'active' : 'inactive'}
                    alphabet={'N'}
                    label={'직관적'}
                    onClick={() => updateMbti(1, 'N')}
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
                    status={mbti[2] === 'T' ? 'active' : 'inactive'}
                    alphabet={'T'}
                    label={'이성적'}
                    onClick={() => updateMbti(2, 'T')}
                  />
                  <MbtiButton
                    status={mbti[2] === 'F' ? 'active' : 'inactive'}
                    alphabet={'F'}
                    label={'감성적'}
                    onClick={() => updateMbti(2, 'F')}
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
                    status={mbti[3] === 'J' ? 'active' : 'inactive'}
                    alphabet={'J'}
                    label={'계획적'}
                    onClick={() => updateMbti(3, 'J')}
                  />
                  <MbtiButton
                    status={mbti[3] === 'P' ? 'active' : 'inactive'}
                    alphabet={'P'}
                    label={'즉흥적'}
                    onClick={() => updateMbti(3, 'P')}
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
