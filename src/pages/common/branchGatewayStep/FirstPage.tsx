import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { useAtom, useSetAtom } from 'jotai';
import { meetingTypeAtom, meetingTypeCheckAtom } from '~/store/meeting';
import { useEffect } from 'react';
import { pageFinishAtom } from '~/store/funnel';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Paddler from '~/components/layout/Pad';
import { css } from '@emotion/react';
import Row from '~/components/layout/Row';
import Checkbox from '~/components/buttons/checkbox/Checkbox';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { useImmerAtom } from 'jotai-immer';
import { useNavigate } from 'react-router-dom';

const MEETING_TYPE_BUTTONS = [
  {
    label: '1:1 미팅',
    type: 'personal',
  },
  {
    label: '3:3 미팅',
    type: 'group',
  },
] as const;

const FirstPage = () => {
  const [meetingTypeValue, setMeetingTypeValue] = useAtom(meetingTypeAtom);
  const [meetingTypeCheckValue, setMeetingTypeCheckValue] =
    useImmerAtom(meetingTypeCheckAtom);
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const navigate = useNavigate();

  const handleSetMeetingTypeCheckValue = (order: number) =>
    setMeetingTypeCheckValue(draft => {
      draft[order] = !draft[order];
    });

  useEffect(() => {
    if (meetingTypeCheckValue.every(value => value) && meetingTypeValue)
      setIsPageFinished(true);
    else setIsPageFinished(false);
  }, [
    meetingTypeCheckValue,
    setMeetingTypeCheckValue,
    meetingTypeValue,
    setMeetingTypeValue,
  ]);

  return (
    <Col align={'center'} gap={20} padding={'36px 20px'}>
      <Col gap={12} align={'center'}>
        <Text
          label={'참여하고자 하는 미팅 종류를 선택해주세요'}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
        <Text
          label={
            '서울시립대학교 구성원만 신청 가능하며\n' +
            '3:3 미팅의 경우 함께 나갈 인원을 모아야 신청이 가능해요.'
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
          {MEETING_TYPE_BUTTONS.map((value, index) => (
            <RoundButton
              key={`${value.label} ${index}`}
              status={meetingTypeValue === value.type ? 'active' : 'inactive'}
              label={value.label}
              onClick={() => setMeetingTypeValue(value.type)}
            />
          ))}
        </Col>
      </Paddler>
      <Col gap={8}>
        <Row align={'center'} justify={'space-between'}>
          <Row
            align={'center'}
            gap={8}
            onClick={() => handleSetMeetingTypeCheckValue(0)}>
            <Checkbox
              checked={meetingTypeCheckValue[0]}
              height={16}
              width={16}
            />
            <Text
              label={'개인정보 활용 정보 제공에 동의합니다.'}
              color={'Gray300'}
              typography={'PretendardRegular'}
            />
          </Row>
          <IconButton
            iconName={'arrow-black'}
            height={10}
            width={6}
            onClick={() => navigate('/common/privacyPolicyStep')}
          />
        </Row>
        <Row
          align={'center'}
          gap={8}
          onClick={() => handleSetMeetingTypeCheckValue(1)}>
          <Checkbox checked={meetingTypeCheckValue[1]} height={16} width={16} />
          <Text
            label={'경희대, 외대, 시립대 재학생 인증을 완료하였습니다.'}
            color={'Gray300'}
            typography={'PretendardRegular'}
          />
        </Row>
      </Col>
    </Col>
  );
};

export default FirstPage;
