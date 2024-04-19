import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import TextInput from '~/components/inputs/textInput/TextInput';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Text from '~/components/typography/Text';
import { combinedValidatiesAtoms } from '~/models';
import { groupDataAtoms } from '~/models/group/data';
import { pageFinishAtom } from '~/models/funnel';

const SecondPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupMemberMyInformationStep.page2,
  );

  const { major, gender, studentType } = pageState;

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupMemberMyInformationStep.page2;
  setIsPageFinished(pageValidity);

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Col gap={60}>
        <Col gap={28}>
          <Col gap={12} align="center">
            <Text
              label={'4. 본인의 학과를 입력해 주세요.'}
              color={'Gray500'}
              typography={'NeoTitleM'}
              weight={400}
              size={18}
            />
            <Col align="center">
              <Text
                label={'학과명을 정확히 입력해 주세요.'}
                color={'Gray400'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
              />
              <Text
                label={'Ex. 국어국문학과(O), 국문과(X)'}
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
              setPageState(prev => ({
                ...prev,
                major: e.target.value,
              }));
            }}
          />
        </Col>
        <Col gap={28}>
          <Col gap={12} align="center">
            <Text
              label={'5. 본인의 성별을 선택해 주세요.'}
              color={'Gray500'}
              typography={'NeoTitleM'}
              weight={400}
              size={18}
            />
            <Col align="center">
              <Text
                label={'팅은 동성끼리만 결성할 수 있습니다.'}
                color={'Gray400'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
              />
            </Col>
          </Col>
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
        <Col gap={28} align="center">
          <Text
            label={'6. 본인의 신분을 선택해 주세요.'}
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
                setPageState(prev => ({ ...prev, studentType: '졸업생' }))
              }
              borderType="primary"
            />
          </Col>
        </Col>
      </Col>
    </Paddler>
  );
};

export default SecondPage;
