import PageLayout from '~/components/layout/page/PageLayout';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { useAtom, useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';

const Fifthpage = () => {
  const [mbti, setMbti] = useAtom(personalApplyAtoms.personalInfo_mbti);
  const updateMbti = (
    prevMbti: string[],
    order: number,
    changeMbti: string,
  ) => {
    const newMbti = [...prevMbti];
    newMbti[order] = changeMbti;
    return newMbti;
  };

  const isAllInputsFilled = mbti;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!isAllInputsFilled);

  return (
    <PageLayout.SingleCardBody
      cardPadding="36px 20px 124px 20px"
      children={
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
            {/* 이 버튼 디자인은 대체.. */}
            <Col gap={8}>
              <Text
                label={'Q. 처음 보는 사람을 만났을 때 나는'}
                color={'Secondary800'}
                typography={'PretendardRegular'}
                weight={400}
                size={14}
              />
              <Row gap={12}>
                <RoundButton
                  status={mbti[0] === 'E' ? 'active' : 'inactive'}
                  label={'E 외향적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 0, 'E'))
                  }
                  borderType="primary"></RoundButton>
                <RoundButton
                  status={mbti[0] === 'I' ? 'active' : 'inactive'}
                  label={'I 내향적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 0, 'I'))
                  }
                  borderType="primary"
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
                <RoundButton
                  status={mbti[1] === 'S' ? 'active' : 'inactive'}
                  label={'S 현실적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 1, 'S'))
                  }
                  borderType="primary"></RoundButton>
                <RoundButton
                  status={mbti[1] === 'N' ? 'active' : 'inactive'}
                  label={'N 직관적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 1, 'N'))
                  }
                  borderType="primary"
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
                <RoundButton
                  status={mbti[2] === 'T' ? 'active' : 'inactive'}
                  label={'T 이성적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 2, 'T'))
                  }
                  borderType="primary"></RoundButton>
                <RoundButton
                  status={mbti[2] === 'F' ? 'active' : 'inactive'}
                  label={'F 감성적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 2, 'F'))
                  }
                  borderType="primary"
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
                <RoundButton
                  status={mbti[3] === 'J' ? 'active' : 'inactive'}
                  label={'J 계획적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 3, 'J'))
                  }
                  borderType="primary"></RoundButton>
                <RoundButton
                  status={mbti[3] === 'P' ? 'active' : 'inactive'}
                  label={'P 즉흥적'}
                  height={56}
                  onClick={() =>
                    setMbti(prevMbti => updateMbti(prevMbti, 3, 'P'))
                  }
                  borderType="primary"
                />
              </Row>
            </Col>
          </Col>
        </Row>
      }
    />
  );
};

export default Fifthpage;
