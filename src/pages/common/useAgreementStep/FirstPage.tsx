import { css } from '@emotion/react';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import Checkbox from '~/components/buttons/checkbox/Checkbox';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import { pageFinishAtom } from '~/store/funnel';
import { colors } from '~/styles/colors';

const AgreementItem = ({
  title,
  content,
  checked,
  onClick,
}: {
  title: string;
  content: string;
  checked: boolean;
  onClick?: () => void;
}) => (
  <Col
    padding="20px"
    style={{
      backgroundColor: `${colors['Gray000']}`,
      border: `1px solid ${colors['Gray200']}`,
      borderRadius: '6px',
    }}>
    <Row align={'center'} gap={12}>
      <Col
        gap={14}
        css={css`
          width: calc(100% - 36px);
        `}>
        <Text label={title} color={'Gray500'} typography={'GoThicTitleS'} />
        <Text
          label={content}
          color={'Gray500'}
          typography={'GoThicBodyS'}
          css={css`
            text-align: start;
          `}
        />
      </Col>
      <Checkbox checked={checked} onClick={onClick} />
    </Row>
  </Col>
);

const FirstPage = () => {
  const [agreementCheckValue, setAgreementCheckValue] = useState([
    false,
    false,
    false,
  ]);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  const handleCheck = (index: number) => {
    setAgreementCheckValue(currentValues =>
      currentValues.map((value, i) => (i === index ? !value : value)),
    );
  };

  useEffect(() => {
    if (agreementCheckValue.every(value => value)) setIsPageFinished(true);
    else setIsPageFinished(false);
  }, [agreementCheckValue, setAgreementCheckValue]);

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Row>
        <Col gap={28}>
          <Col gap={12} align={'center'}>
            <Text
              label={'즐거운 시대팅을 위해 약속해주세요'}
              color={'Gray500'}
              typography={'NeoTitleM'}
              size={18}
            />
            <Text
              label={
                '매너있는 시대팅 문화를 위해 \n' +
                '몇 가지 주의사항을 읽어주세요.'
              }
              color={'Gray400'}
              typography={'GoThicBodyS'}
            />
          </Col>
          <Col gap={23} align={'center'}>
            <AgreementItem
              title="불쾌함을 줄 수 있는 언행은 자제해주세요"
              content="상대방이 불쾌함을 느낄 수 있는 말과 행동은 삼가하고, 건전한 분위기의 모임을 조성해주세요. ‘비매너유저'로 신고될 경우, 시대팅 서비스 이용제한 등의 패널티가 부과될 수 있어요."
              checked={agreementCheckValue[0]}
              onClick={() => handleCheck(0)}
            />
            <AgreementItem
              title="노쇼는 지양해주세요"
              content="상대와의 약속 일정 및 시간을 지켜주세요. 부득이한 상황으로 불참 시, 상대에게 미리 양해를 구해주세요. 노쇼로 인한 ‘비매너유저’로 신고가 될 수 있으며, 시대팅 서비스 이용제한 의 패널티가 부과될 수 있어요."
              checked={agreementCheckValue[1]}
              onClick={() => handleCheck(1)}
            />
            <AgreementItem
              title="환불 관련 정책을 꼭 숙지해주세요"
              content={
                '(1) 매칭 실패 시, 결과 페이지서 입력하신 계좌로 환불이 진행돼요. \n' +
                '(2) 상대방의 채팅방 미입장(노쇼)으로 인한 매칭 실패 시, 시대생 카카오채널로 문의 주시면 환불 진행을 도와드려요.'
              }
              checked={agreementCheckValue[2]}
              onClick={() => handleCheck(2)}
            />
          </Col>
        </Col>
      </Row>
    </Paddler>
  );
};

export default FirstPage;
