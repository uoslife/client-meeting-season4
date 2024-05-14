import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import Paddler from '~/components/layout/Pad';
import { css } from '@emotion/react';
import Row from '~/components/layout/Row';
import Checkbox from '~/components/buttons/checkbox/Checkbox';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { useImmerAtom } from 'jotai-immer';
import { commonDataAtoms } from '~/models/common/data';
import useTypeSafeNavigate from '~/hooks/useTypeSafeNavigate';
import { combinedValidatiesAtoms } from '~/models';

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
  const [pageState, setPageState] = useImmerAtom(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );
  const { checked, meetingType } = pageState;

  const navigate = useTypeSafeNavigate();
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonBranchGatewayStep.page1;
  setIsPageFinished(pageValidity);

  const handleSetMeetingTypeCheckValue = (order: number) =>
    setPageState(prev => {
      prev.checked[order] = !prev.checked[order];
    });

  return (
    <Col align={'center'} gap={20} padding={'55px 20px'}>
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
              status={meetingType === value.type ? 'active' : 'inactive'}
              label={value.label}
              onClick={() =>
                setPageState(prev => {
                  prev.meetingType = value.type;
                })
              }
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
            <Checkbox checked={checked[0]} height={16} width={16} />
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
          <Checkbox checked={checked[1]} height={16} width={16} />
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
