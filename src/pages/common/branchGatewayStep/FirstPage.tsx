import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { useAtom, useSetAtom } from 'jotai';
import { univTypeAtom } from '~/store/meeting';
import { useEffect } from 'react';
import { pageFinishAtom } from '~/store/funnel';
import RoundButton from '~/components/buttons/roundButton/RoundButton';

const FirstPage = () => {
  const [univAtom, setUnivAtom] = useAtom(univTypeAtom);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    if (univAtom) {
      setIsPageFinished(true);
    }
  }, [univAtom, setUnivAtom]);

  return (
    <Col align={'center'} gap={52}>
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
      />
      <Col>
        <RoundButton
          status={'inactive'}
          label={'1:1 미팅'}
          onClick={() => console.log('asd')}
        />
        <RoundButton
          status={'inactive'}
          label={'3:3 미팅'}
          onClick={() => console.log('asd')}
        />
      </Col>
    </Col>
  );
};

export default FirstPage;
