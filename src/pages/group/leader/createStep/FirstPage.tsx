import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import TextInput from '~/components/inputs/textInput/TextInput';
import { useAtom, useAtomValue } from 'jotai';
import { ChangeEvent } from 'react';
import { useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { groupDataAtoms } from '~/models/group/data';
import { combinedValidatiesAtoms } from '~/models';

const FirstPage = () => {
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderGroupCreateStep.page1,
  );
  const { teamName } = pageState;
  const onChangeTeamName = (e: ChangeEvent<HTMLInputElement>) => {
    setPageState(prev => ({ ...prev, teamName: e.target.value }));
  };

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderGroupCreateStep.page1;
  setIsPageFinished(pageValidity);

  return (
    <Col align={'center'} gap={20} padding={'36px 20px'}>
      <Col gap={12} align={'center'}>
        <Text
          label={'우리 팅의 이름을 정해 주세요'}
          color={'Gray500'}
          typography={'NeoTitleM'}
        />
        <Text
          label={
            '지금부터 입력하는 정보는 상대 팅에게 공개돼요.\n' +
            '욕설 및 비하 단어는 삼가 주세요.'
          }
          color={'Gray400'}
          typography={'GoThicBodyS'}
          css={css`
            text-align: center;
          `}
        />
      </Col>
      <TextInput
        value={teamName}
        onChange={onChangeTeamName}
        status={'default'}
        placeholder={'팅 이름 입력 (2글자 이상)'}
      />
    </Col>
  );
};

export default FirstPage;
