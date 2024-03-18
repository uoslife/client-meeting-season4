import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Paddler from '~/components/layout/Pad';
import { css } from '@emotion/react';
import { groupDataAtoms } from '~/models/group/data';
import { combinedValidatiesAtoms } from '~/models';

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
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupRoleSelectStep.page1,
  );

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms).groupRoleSelectStep
    .page1;
  setIsPageFinished(pageValidity);

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
              status={
                pageState.isLeader === value.isLeader ? 'active' : 'inactive'
              }
              label={value.label}
              onClick={() => setPageState({ isLeader: value.isLeader })}
            />
          ))}
        </Col>
      </Paddler>
    </Col>
  );
};

export default FirstPage;
