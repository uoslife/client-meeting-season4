import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import DropdownInput from '~/components/inputs/dropdownInput/DropdownInput';
import TextInput from '~/components/inputs/textInput/TextInput';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import { combinedValidatiesAtoms } from '~/models';
import { groupDataAtoms } from '~/models/group/data';
import { pageFinishAtom } from '~/models/funnel';
import { isUosUserAtom } from '~/models/auth';
import uoslifeBridge from '~/bridge';
import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import RoundButton from '~/components/buttons/roundButton/RoundButton';

const FirstPage = () => {
  const [duplicateStatusForKakao, setDuplicateStatusForKakao] = useState('');
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupMemberMyInformationStep.page1,
  );

  const { age, name, kakaoId, isNotDuplicatedForKakaotalkId } = pageState;

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupMemberMyInformationStep.page1;
  setIsPageFinished(pageValidity);

  const isUosUserValue = useAtomValue(isUosUserAtom);
  const getUoslifeUserInfo = async () => {
    const res = await uoslifeBridge.getUserInfo();
    setPageState(prev => ({ ...prev, name: res.name }));
  };

  const handleDuplicatedForKakaotalkId = async () => {
    try {
      await MeetingAPI.checkDuplicatedKakaotalkId(kakaoId);
      setPageState(prev => ({
        ...prev,
        isNotDuplicatedForKakaotalkId: true,
      }));
      setDuplicateStatusForKakao('사용가능한 아이디입니다.');
    } catch (e) {
      setDuplicateStatusForKakao('중복된 아이디입니다.');
      throw Error;
    }
  };

  useEffect(() => {
    if (isUosUserValue) {
      getUoslifeUserInfo();
    }
  }, []);

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Row>
        <Col gap={56}>
          <Col gap={28}>
            <Col gap={12} align="center">
              <Text
                label={'1. 본인의 이름(실명)을 입력해 주세요'}
                color={'Gray500'}
                typography={'NeoTitleM'}
                weight={400}
                size={18}
              />
              <Col align="center">
                <Text
                  label={'지금부터 입력하는 정보는 매칭된 상대에게 공개돼요.'}
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
          <Col gap={28}>
            <Col gap={12} align="center">
              <Text
                label={'2. 본인의 나이를 선택해 주세요'}
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
          <Col gap={28}>
            <Col gap={12} align="center">
              <Text
                label={'3. 카카오톡 ID를 입력해 주세요'}
                color={'Gray500'}
                typography={'NeoTitleM'}
                weight={400}
                size={18}
              />
              <Col align="center">
                <Text
                  label={'매칭 이후 상대와 연락할 수 있는 수단으로 활용돼요.'}
                  color={'Gray400'}
                  typography={'GoThicBodyS'}
                  weight={400}
                  size={14}
                />
                <Text
                  label={'카카오톡 [설정]-[프로필 관리]-[카카오톡 ID]에서'}
                  color={'Gray400'}
                  typography={'GoThicBodyS'}
                  weight={400}
                  size={14}
                />
                <Text
                  label={'ID 검색 허용이 되어있는지 확인해주세요.'}
                  color={'Gray400'}
                  typography={'GoThicBodyS'}
                  weight={400}
                  size={14}
                />
              </Col>
            </Col>
            <Col>
              <Row justify={'center'} align={'center'} gap={10}>
                <TextInput
                  value={kakaoId}
                  status={'default'}
                  placeholder={'카카오톡 ID 입력'}
                  minLength={2}
                  onChange={e => {
                    setPageState(prev => ({
                      ...prev,
                      kakaoId: e.target.value,
                    }));
                  }}
                />
                <RoundButton
                  status={isNotDuplicatedForKakaotalkId ? 'active' : 'inactive'}
                  onClick={handleDuplicatedForKakaotalkId}
                  width={100}
                  height={45}>
                  <Text
                    label={'중복확인'}
                    color={
                      isNotDuplicatedForKakaotalkId ? 'White' : 'Primary500'
                    }
                    typography={'PretendardRegular'}
                    size={15}
                  />
                </RoundButton>
              </Row>
              <Text
                label={duplicateStatusForKakao}
                color={
                  duplicateStatusForKakao === '사용가능한 아이디입니다.'
                    ? 'Primary500'
                    : 'Red200'
                }
                typography={'PretendardRegular'}
              />
            </Col>
          </Col>
        </Col>
      </Row>
    </Paddler>
  );
};

export default FirstPage;
