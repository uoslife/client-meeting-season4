import Col from '../layout/Col';
import Text from '../typography/Text';

const CheckPageTopSayings = () => (
  <Col gap={4} align="center">
    <Text
      color="Primary500"
      label="신청 정보를 확인해줘"
      typography="NeoTitleM"
    />
    <Text
      color="Secondary800"
      label="신청 완료 후에는 수정이 불가해요."
      typography="GoThicBodyS"
    />
  </Col>
);

export default CheckPageTopSayings;
