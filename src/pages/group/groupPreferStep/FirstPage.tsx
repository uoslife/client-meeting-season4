import { css } from '@emotion/react';
import { useAtom, useSetAtom } from 'jotai';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Row from '~/components/layout/Row';
import RangeSlider from '~/components/rangeSlider/RangeSlider';
import Text from '~/components/typography/Text';
import useRangeState from '~/hooks/useRangeState';
import { groupApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';
import { useEffect } from 'react';

const FirstPage = () => {
  const { rangeHandler: ageHandler, rangeValue: age } = useRangeState([20, 30]);
  const [, setPreferAge] = useAtom(groupApplyAtoms.groupPrefer_age);
  const [preferUniversity, setPreferUniversity] = useAtom(
    groupApplyAtoms.groupPrefer_univ,
  );
  const [preferAtmosphere, setPreferAtmosphere] = useAtom(
    groupApplyAtoms.groupPrefer_atmosphere,
  );

  const isAllInputsFilled =
    age && preferUniversity.length > 1 && preferAtmosphere;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!isAllInputsFilled);

  useEffect(() => {
    setPreferAge(age.map(String));
  }, [age]);

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Row>
        <Col gap={60}>
          <Col gap={28}>
            <Col gap={12} align={'center'}>
              <Text
                label={'1. 상대 팅원들의 나이 범위를 선택해 주세요'}
                color={'Gray500'}
                typography={'NeoTitleM'}
                size={18}
              />
              <Text
                label={'한국 나이(만 나이X) 기준으로 입력해주세요.'}
                color={'Gray400'}
                typography={'GoThicBodyS'}
              />
            </Col>
            <Col gap={32} align={'center'}>
              <Text
                label={`${age[0]}-${age[1]} 세`}
                color={'Primary500'}
                typography={'LeferiBaseRegular'}
              />
              <Paddler left={20} right={20} bottom={30}>
                <RangeSlider
                  value={age}
                  onChange={ageHandler}
                  min={20}
                  max={30}
                  step={1}
                  markStep={1}
                  maxMarkPostfix="~"
                />
              </Paddler>
            </Col>
          </Col>
          <Col gap={28}>
            <Col gap={12} align={'center'}>
              <Text
                label={'2. 매칭을 원하는 대학을 입력해 주세요'}
                color={'Gray500'}
                typography={'NeoTitleM'}
                size={18}
              />
              <Text
                label={
                  '대학을 모두 선택한 경우 \n' +
                  '원하는 팅과의 매칭 성공 확률이 높아져요.'
                }
                color={'Gray400'}
                typography={'GoThicBodyS'}
                css={css`
                  text-align: center;
                `}
              />
            </Col>
            <Col gap={8}>
              {['경희대학교', '서울시립대학교', '한국외국어대학교'].map(
                univ => (
                  <RoundButton
                    key={univ}
                    label={univ}
                    status={
                      preferUniversity.includes(univ) ? 'active' : 'inactive'
                    }
                    onClick={() => {
                      if (preferUniversity.includes(univ)) {
                        setPreferUniversity(
                          preferUniversity.filter(u => u !== univ),
                        );
                      } else {
                        setPreferUniversity([...preferUniversity, univ]);
                      }
                    }}
                  />
                ),
              )}
            </Col>
          </Col>
          <Col gap={28} align="center">
            <Text
              label={'3. 상대 팅의 분위기를 선택해 주세요'}
              color={'Gray500'}
              typography={'NeoTitleM'}
              size={18}
            />
            <Col gap={8}>
              <RoundButton
                label="활발한 편"
                status={
                  preferAtmosphere === '활발한 편' ? 'active' : 'inactive'
                }
                onClick={() => setPreferAtmosphere('활발한 편')}
              />
              <RoundButton
                label="차분한 편"
                status={
                  preferAtmosphere === '차분한 편' ? 'active' : 'inactive'
                }
                onClick={() => setPreferAtmosphere('차분한 편')}
              />
              <RoundButton
                label="둘 다 좋아요!"
                status={
                  preferAtmosphere === '둘 다 좋아요!' ? 'active' : 'inactive'
                }
                onClick={() => setPreferAtmosphere('둘 다 좋아요!')}
              />
            </Col>
          </Col>
        </Col>
      </Row>
    </Paddler>
  );
};

export default FirstPage;
