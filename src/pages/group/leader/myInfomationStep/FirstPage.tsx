import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import TextInput from '~/components/inputs/textInput/TextInput';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import DropdownInput from '~/components/inputs/dropdownInput/DropdownInput';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import { groupDataAtoms } from '~/models/group/data';
import { combinedValidatiesAtoms } from '~/models';
import uoslifeBridge from '~/bridge';
import { useEffect } from 'react';
import { isUosUserAtom } from '~/models/auth';

const FirstPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderMyInformationStep.page1,
  );

  const { age, gender, name } = pageState;

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderMyInformationStep.page1;
  setIsPageFinished(pageValidity);

  const isUosUserValue = useAtomValue(isUosUserAtom);
  const getUoslifeUserInfo = async () => {
    const res = await uoslifeBridge.getUserInfo();
    setPageState(prev => ({ ...prev, name: res.name }));
  };

  useEffect(() => {
    if (isUosUserValue) {
      getUoslifeUserInfo();
    }
  }, []);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={56}>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'1. 이름(실명)을 입력해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Col align="center">
                    <Text
                      label={
                        '지금부터 입력하는 정보는 매칭된 상대에게 공개돼요.'
                      }
                      color={'Gray400'}
                      typography={'GoThicBodyS'}
                      weight={400}
                      size={14}
                    />
                  </Col>
                </Col>
                <TextInput
                  value={name}
                  status={'default'}
                  placeholder={'이름 입력'}
                  onChange={e => {
                    setPageState(prev => ({ ...prev, name: e.target.value }));
                  }}
                />
              </Col>
              <Col gap={28} align="center">
                <Text
                  label={'2. 성별을 선택해 주세요'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col gap={8}>
                  <RoundButton
                    status={gender === 'MALE' ? 'active' : 'inactive'}
                    label={'남자'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({ ...prev, gender: 'MALE' }))
                    }
                    borderType="primary"
                  />
                  <RoundButton
                    status={gender === 'FEMALE' ? 'active' : 'inactive'}
                    label={'여자'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({ ...prev, gender: 'FEMALE' }))
                    }
                    borderType="primary"
                  />
                </Col>
              </Col>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'3. 나이를 선택해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={'한국 나이(만 나이X) 기준으로 입력해주세요.'}
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
                <Col>
                  <DropdownInput
                    value={age}
                    setValue={value =>
                      setPageState(prev => ({ ...prev, age: value }))
                    }
                    label={'나이 선택'}
                    options={[
                      '20',
                      '21',
                      '22',
                      '23',
                      '24',
                      '25',
                      '26',
                      '27',
                      '28',
                      '29',
                      '30~',
                    ]}
                  />
                </Col>
              </Col>
            </Col>
          </Row>
        </Paddler>
      }
    />
  );
};

export default FirstPage;
