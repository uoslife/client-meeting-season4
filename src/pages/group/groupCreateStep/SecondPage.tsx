import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import { useAtom, useAtomValue } from 'jotai';
import { groupApplyAtoms } from '~/store/meeting';
import { useEffect, useState } from 'react';
import { colors } from '~/styles/colors';
import Row from '~/components/layout/Row';
import IconButton from '~/components/buttons/iconButton/IconButton';
import styled from '@emotion/styled';

const TEAM_JOIN_STATUS = [
  {
    name: '호랑이 (본인)',
    isJoin: true,
  },
  {
    name: '낙타',
    isJoin: false,
  },
  {
    name: '곰돌이',
    isJoin: false,
  },
];

const SecondPage = () => {
  const [codeValue, setCodeValue] = useAtom(groupApplyAtoms.groupJoin_code);
  const temaNameValue = useAtomValue(groupApplyAtoms.groupInfo_name);
  const [teamJoinStatusValue, setTeamJoinStatusValue] =
    useState(TEAM_JOIN_STATUS);

  // 코드 api에서 받아오기
  useEffect(() => {
    setCodeValue('8250');
  }, []);

  return (
    <Col align={'center'} gap={24} padding={'36px 20px'}>
      <Col gap={12} align={'center'}>
        <Text
          label={codeValue}
          color={'Gray500'}
          typography={'NeoTitleM'}
          size={60}
          css={css`
            line-height: 140%; /* 84px */
            letter-spacing: 8px;
          `}
        />
        <Text
          label={'팅 코드를 팅원에게 공유해 주세요'}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
        <Text
          label={'유효시간 내에 모든 인원이 입장을 완료해야해요.'}
          color={'Gray500'}
          typography={'GoThicTitleS'}
        />
        <Text
          label={
            '팅 결성 전에 페이지를 떠나거나 코드를 재발급하는 경우, \n' +
            '생성 중인 팅이 자동으로 삭제돼요.'
          }
          color={'Gray400'}
          typography={'GoThicBodyS'}
          css={css`
            text-align: center;
          `}
        />
      </Col>
      <div
        css={css`
          border: 1px solid ${colors.Gray100};
          width: 100%;
        `}
      />
      <Col align={'center'} gap={8}>
        <Text label={'팅 이름'} color={'Gray500'} typography={'GoThicBodyS'} />
        <Text
          label={`" ${temaNameValue} "`}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
      </Col>
      <Col gap={6}>
        <Row align={'center'} justify={'space-between'} gap={8}>
          <Row align={'center'} padding={'0 0 0 30px'}>
            <Text
              label={'팅 결성 대기중'}
              color={'Gray400'}
              typography={'GoThicTitleS'}
            />
          </Row>
          <Row
            align={'center'}
            justify={'flex-end'}
            gap={4}
            padding={'0 16px  0 0 '}>
            <IconButton
              iconName={'participationModal-human'}
              width={15}
              height={15}
            />
            <Text label={'1/3'} color={'Gray400'} typography={'PFLabelL'} />
          </Row>
        </Row>
        <S.TeamJoinStatus>
          <Col gap={24}>
            {teamJoinStatusValue.map((value, index) => {
              return (
                <Row key={`${value} + ${index}`}>
                  <Row align={'center'} gap={8}>
                    <IconButton
                      iconName={'human-circle'}
                      width={20}
                      height={20}
                    />
                    <Text
                      label={value.name}
                      color={'Gray500'}
                      typography={'GoThicTitleS'}
                    />
                  </Row>
                  <Row align={'center'} justify={'flex-end'} gap={8}>
                    <Text
                      label={value.isJoin ? '입장완료' : '미입장'}
                      color={value.isJoin ? 'Primary500' : 'Gray200'}
                      typography={'GoThicBodyS'}
                    />
                    <IconButton
                      iconName={
                        value.isJoin
                          ? 'checkCircle-active'
                          : 'checkCircle-inactive'
                      }
                      width={20}
                      height={20}
                    />
                  </Row>
                </Row>
              );
            })}
          </Col>
        </S.TeamJoinStatus>
      </Col>
    </Col>
  );
};

export default SecondPage;

const S = {
  TeamJoinStatus: styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${colors.Gray300};
    background: ${colors.Gray50};
  `,
};
