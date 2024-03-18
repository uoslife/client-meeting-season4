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

const FirstPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupMemberMyInformationStep.page1,
  );

  const { age, name, kakaoId } = pageState;

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupMemberMyInformationStep.page1;
  setIsPageFinished(pageValidity);

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
            <TextInput
              value={kakaoId}
              status={'default'}
              placeholder={'카카오톡 ID 입력'}
              onChange={e => {
                setPageState(prev => ({
                  ...prev,
                  kakaoId: e.target.value,
                }));
              }}
            />
          </Col>
        </Col>
      </Row>
    </Paddler>
  );
};

export default FirstPage;
