import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Row from '~/components/layout/Row';
import PageLayout from '~/components/layout/page/PageLayout';
import Text from '~/components/typography/Text';

const FirstPage = () => {
  return (
    <PageLayout.SingleCardBody
      cardPadding="0 0 36px"
      children={
        <Paddler top={36} right={20} bottom={0} left={20}>
          <Row>
            <Col>
              <Text
                label={
                  '시대생 (UOSLIFE)는 시대팅 서비스 이용에 반드시 필요한 개인정보를 다음과 같은 목적을 위하여 수집 및 처리합니다.\n\n'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'(1) 처리 목적과 항목'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
                weight={700}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={
                  '처리하는 개인정보는 다음의 목적 이외의 용도로는 처리되지 않습니다.'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={
                  '시대팅 : 소개팅 또는 미팅 주선을 위한 소셜 서비스를 제공합니다.\n\n'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'(2) 수집 정보'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
                weight={700}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={
                  '시대팅 서비스 이용에 필요한 최소한의 개인정보만을 수집하고 있습니다.'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'*공통 수집 정보'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
                weight={700}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={
                  ': 학교 정보, 학교 웹메일 주소, 실명, 성별, 나이, 키, 카카오톡 ID, 전화번호, 학과, 신분, 종교, 흡연 여부\n\n'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'*타대학 유저 (경희대, 외대) 수집 정보'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
                weight={700}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={': 본인식별값 (이메일)\n\n'}
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'[안내] 개인정보의 수집방법'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
                weight={700}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'- 시대팅 서비스 내에서 유저가 직접 입력한 정보'}
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={
                  '- 시대팅 서비스 이용 과정에서 자동으로 수집되는 정보 \n\n'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'(3) 개인정보의 파기'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
                weight={700}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={
                  '개인정보 수집 및 이용 목적이 달성되거나, 보유기간의 경과 및 종료, 서비스 종료 시 해당 개인정보를 지체없이 파기합니다. 법령에 따라 전자적 파일 형태로 저장된 개인정보는 복구 또는 재생되지 아니하도록 파기합니다.\n\n'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={'(4) 개인정보의 안전성 확보 조치'}
                color={'Gray500'}
                typography={'GoThicTitleS'}
                weight={700}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
              <Text
                label={
                  '단체는 개인정보의 안전성 확보를 위해 관리적,조치,기술적 조치, 물리적 조치 등을 취하고 있습니다.'
                }
                color={'Gray500'}
                typography={'GoThicBodyS'}
                weight={400}
                size={14}
                align={'flex-start'}
                wordBreak={'none'}
              />
            </Col>
          </Row>
        </Paddler>
      }
    />
  );
};

export default FirstPage;
