import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import TextInput from '~/components/inputs/textInput/TextInput';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import { combinedValidatiesAtoms } from '~/models';
import { groupDataAtoms } from '~/models/group/data';
import uoslifeBridge from '~/bridge';
import { useEffect, useState } from 'react';
import { isUosUserAtom } from '~/models/auth';
import { InfoOptions } from '~/models/options';
import { MeetingAPI } from '~/api';

const SecondPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderMyInformationStep.page2,
  );

  const { kakaoId, major, phone, studentType, isNotDuplicatedForKakaotalkId } =
    pageState;

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderMyInformationStep.page2;
  setIsPageFinished(pageValidity);

  const isUosUserValue = useAtomValue(isUosUserAtom);
  const getUoslifeUserInfo = async () => {
    const res = await uoslifeBridge.getUserInfo();
    if (res.identity.status === '재학생') {
      res.identity.status = '학부생';
    }
    setPageState(prev => ({
      ...prev,
      // phone: res.phone,
      major: res.identity.department,
      studentType: res.identity.status as InfoOptions['studentType'],
    }));
  };

  const [duplicateStatusForKakao, setDuplicateStatusForKakao] = useState('');
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
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={56}>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Row justify={'center'}>
                    <Text
                      label={'4. 카카오톡 ID를 입력해 주세요'}
                      color={'Gray500'}
                      typography={'NeoTitleM'}
                      weight={400}
                      size={18}
                    />
                  </Row>
                  <Col align="center">
                    <Text
                      label={
                        '매칭 이후 상대와 연락할 수 있는 수단으로 활용돼요.'
                      }
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
                      status={
                        isNotDuplicatedForKakaotalkId ? 'active' : 'inactive'
                      }
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
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'5. 본인의 전화번호를 입력해 주세요.'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={'매칭 완료 알림을 위한 수단으로 사용됩니다.'}
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
                <TextInput
                  value={phone}
                  status={'default'}
                  type={'number'}
                  placeholder={'ex) 01012345678'}
                  onChange={e => {
                    if (e.target.value.length > 11) return;
                    setPageState(prev => ({ ...prev, phone: e.target.value }));
                  }}
                />
              </Col>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'6. 학과를 입력해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Col align="center">
                    <Text
                      label={'학과명을 정확히 입력해주세요.'}
                      color={'Gray400'}
                      typography={'GoThicBodyS'}
                      weight={400}
                      size={14}
                    />
                    <Text
                      label={'Ex. 국어국문학과(O) , 국문과(X)'}
                      color={'Gray400'}
                      typography={'GoThicBodyS'}
                      weight={400}
                      size={14}
                    />
                  </Col>
                </Col>
                <TextInput
                  value={major}
                  status={'default'}
                  placeholder={'학과명 입력 (2글자 이상)'}
                  onChange={e => {
                    setPageState(prev => ({ ...prev, major: e.target.value }));
                  }}
                />
              </Col>
              <Col gap={28} align="center">
                <Text
                  label={'7. 신분을 선택해 주세요'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col gap={8}>
                  <RoundButton
                    status={studentType === '학부생' ? 'active' : 'inactive'}
                    label={'학부생'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({ ...prev, studentType: '학부생' }))
                    }
                    borderType="primary"
                  />
                  <RoundButton
                    status={studentType === '대학원생' ? 'active' : 'inactive'}
                    label={'대학원생'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({
                        ...prev,
                        studentType: '대학원생',
                      }))
                    }
                    borderType="primary"
                  />
                  <RoundButton
                    status={studentType === '졸업생' ? 'active' : 'inactive'}
                    label={'졸업생'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({
                        ...prev,
                        studentType: '졸업생',
                      }))
                    }
                    borderType="primary"
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

export default SecondPage;
