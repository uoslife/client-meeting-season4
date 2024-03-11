import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import Row from '~/components/layout/Row';
import IconButton from '~/components/buttons/iconButton/IconButton';
import { useAtom, useSetAtom } from 'jotai';
import { univTypeAtom } from '~/store/meeting';
import { useEffect } from 'react';
import { pageFinishAtom } from '~/store/funnel';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '~/styles/colors';
import Paddler from '~/components/layout/Pad';

const UNIV_SELECTION_LIST = ['KHU', 'HUFS'] as const;

const FirstPage = () => {
  const [univValue, setUnivValue] = useAtom(univTypeAtom);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setIsPageFinished(!!univValue);
  }, [univValue]);

  // jotai 전역 변수가 groupApplyAtom처럼 객체라면 아래 코드처럼 useImmerAtom을 사용해보세요!
  // const [nickname, setNickname] = useImmerAtom(groupApplyAtom);
  // const handleSetNickname = () => {
  //   setNickname(draft => {
  //     draft.info_name.data = '김영찬123';
  //   });
  // };

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Col align={'center'} gap={52}>
        {/*<div>{nickname.info_name.data}</div>*/}
        {/*<div onClick={handleSetNickname}>useImmerAtom으로 전역 객체 관리해보기 </div>*/}
        <Text
          label={'본인 학교를 선택해 주세요 (˵^࿄^˵)'}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
        <Row gap={20} justify={'center'}>
          {UNIV_SELECTION_LIST.map((univ, index) => {
            return (
              <UnivSelectContainer
                key={`${univ} - ${index}`}
                isClicked={univValue === univ}
                onClick={() => setUnivValue(univ)}>
                <IconButton
                  iconName={`univSelection/${univ}`}
                  format={'png'}
                  width={170}
                  height={130}
                />
                <Text
                  label={univ === 'KHU' ? '경희대학교' : '한국외국어대학교'}
                  color={'Gray300'}
                  typography={'NeoBodyM'}
                />
              </UnivSelectContainer>
            );
          })}
        </Row>
      </Col>
    </Paddler>
  );
};

export default FirstPage;

export const UnivSelectContainer = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0;

  ${({ isClicked }) =>
    isClicked &&
    css`
      border: 2px solid ${colors.Primary500};
      border-radius: 12px;
      background: ${colors.Primary100};
    `}
`;
