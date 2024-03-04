import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { useAtom, useSetAtom } from 'jotai';
import { groupApplyAtoms } from '~/store/meeting';
import { useEffect } from 'react';
import { pageFinishAtom } from '~/store/funnel';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Paddler from '~/components/layout/Pad';
import { css } from '@emotion/react';

const GROUP_ROLE_BUTTONS = [
  {
    label: '팅 만들기',
    isLeader: true,
  },
  {
    label: '팅 참여하기',
    isLeader: false,
  },
] as const;

const FirstPage = () => {
  const [isLeaderValue, setIsLeaderValue] = useAtom(
    groupApplyAtoms.groupRole_isLeader,
  );
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    if (isLeaderValue != null) setIsPageFinished(true);
    else setIsPageFinished(false);
  }, [isLeaderValue, setIsLeaderValue]);

  return (
    <Col align={'center'} gap={20} padding={'36px 20px'}>
      <Col gap={12} align={'center'}>
        <Text
          label={'모임을 만드시나요? 참여하시나요?'}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
        <Text
          label={
            '팅을 만드는 팅장은 발급 받은 팅 코드를\n' +
            '팅원들에게 알려주고 팅에 대한 정보를 입력하게 돼요.'
          }
          color={'Gray400'}
          typography={'GoThicBodyS'}
          css={css`
            text-align: center;
          `}
        />
        <Text
          label={
            '그 외 이미 만들어진 팅에 참여하시는 경우,\n' +
            '팅장에게 전달 받은 팅 코드를 입력하면 참여 가능해요.'
          }
          color={'Gray400'}
          typography={'GoThicBodyS'}
          css={css`
            text-align: center;
          `}
        />
      </Col>
      <Paddler top={8}>
        <Col gap={8}>
          {GROUP_ROLE_BUTTONS.map((value, index) => (
            <RoundButton
              key={`${value.label} ${index}`}
              status={isLeaderValue === value.isLeader ? 'active' : 'inactive'}
              label={value.label}
              onClick={() => setIsLeaderValue(value.isLeader)}
            />
          ))}
        </Col>
      </Paddler>
    </Col>
  );
};

export default FirstPage;
