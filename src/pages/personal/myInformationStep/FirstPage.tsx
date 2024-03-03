import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import TextInput from '~/components/inputs/textInput/TextInput';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import DropdownInput from '~/components/inputs/dropdownInput/DropdownInput';
import { useInput } from '~/hooks/useInput';
import { useAtom, useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';

const FirstPage = () => {
  const { inputValue: name, handleInputChange: handleNameChange } =
    useInput('');
  const [gender, setGender] = useAtom(personalApplyAtoms.myInfo_gender);
  const [age, setAge] = useAtom(personalApplyAtoms.myInfo_age);
  const [height, setHeight] = useAtom(personalApplyAtoms.myInfo_height);

  const isAllInputsFilled = name && gender && age && height;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!isAllInputsFilled);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={56}>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'1. 본인의 이름(실명)을 입력해 주세요.'}
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
                    <Text
                      label={'욕설 및 비하 단어는 삼가 주세요'}
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
                  onChange={handleNameChange}
                />
              </Col>
              <Col gap={28} align="center">
                <Text
                  label={'2. 본인의 성별을 선택해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col gap={8}>
                  <RoundButton
                    status={gender === '남자' ? 'active' : 'inactive'}
                    label={'남자'}
                    height={56}
                    onClick={() => setGender('남자')}
                    borderType="primary"
                  />
                  <RoundButton
                    status={gender === '여자' ? 'active' : 'inactive'}
                    label={'여자'}
                    height={56}
                    onClick={() => setGender('여자')}
                    borderType="primary"
                  />
                </Col>
              </Col>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'3. 본인의 나이를 선택해 주세요.'}
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
                    setValue={age => setAge(age)}
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
                <Col align="center">
                  <Text
                    label={'4. 본인의 키를 선택해 주세요.'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                </Col>
                <DropdownInput
                  value={height}
                  setValue={height => setHeight(height)}
                  label={'키 선택'}
                  options={[
                    '~150',
                    '155',
                    '160',
                    '165',
                    '170',
                    '175',
                    '180',
                    '185',
                    '190~',
                  ]}
                />
              </Col>
            </Col>
          </Row>
        </Paddler>
      }
    />
  );
};

export default FirstPage;
