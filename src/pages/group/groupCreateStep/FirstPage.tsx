import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import TextInput from '~/components/inputs/textInput/TextInput';
import { useAtom } from 'jotai';
import { groupApplyAtoms } from '~/store/meeting';
import { ChangeEvent, useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';

const FirstPage = () => {
  const [teamNameValue, setTeamNameValue] = useAtom(
    groupApplyAtoms.groupInfo_name,
  );
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamNameValue(e.target.value);
  };

  useEffect(() => {
    setIsPageFinished(teamNameValue.length >= 2);
  }, [teamNameValue]);

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
        value={teamNameValue}
        onChange={handleOnChange}
        status={'default'}
        placeholder={'팅 이름 입력 (2글자 이상)'}
      />
    </Col>
  );
};

export default FirstPage;
