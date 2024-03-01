import styled from '@emotion/styled';
import Row from '../layout/Row';
import Col from '../layout/Col';
import Text from '../typography/Text';
import ProfileInfoItems, { ProfileInfoItemType } from './ProfileInfoItems';

type PersonalProfileProps = {
  nicknameLabel: string;
  genderAndAgeLabel: string;
  otherLabels: ProfileInfoItemType[];
};

/** 좌측에 프로필 사진(?), 우측에 키와 학교 등 개인정보 */
const PersonalProfile = ({
  genderAndAgeLabel,
  nicknameLabel,
  otherLabels,
}: PersonalProfileProps) => {
  // TODO: 정보 가공 hook 작성 시 활용, 이후 지우기

  // const personalEntireInfo = usePersonalEntireValue();
  // const univValue = useAtomValue(univTypeAtom)!;

  // const nicknameLabel = personalEntireInfo.info_nickname;
  // const genderMark = personalEntireInfo.info_gender === '여자' ? '♀' : '♂';
  // const genderAndAgeLabel = `(${genderMark}), ${personalEntireInfo.info_age}세`;

  // const heightLabel = `${personalEntireInfo.info_height}cm`;
  // const univLabel = {
  //   HUFS: '한국외대',
  //   KHU: '경희대',
  //   UOS: '서울시립대',
  // }[univValue];
  // const majorLabel = personalEntireInfo.info_major;
  // const studentTypeLabel = personalEntireInfo.info_studentType;
  // const kakaoIdLabel = personalEntireInfo.info_kakaoId;

  // const otherLabels: ProfileInfoItemType[] = [
  //   { name: '키', content: heightLabel },
  //   { name: '학교', content: univLabel },
  //   { name: '학과', content: majorLabel },
  //   { name: '신분', content: studentTypeLabel },
  //   { name: '카카오톡 ID', content: kakaoIdLabel },
  // ];

  return (
    <Row gap={16}>
      <S.LeftBox />
      <Col gap={8}>
        <Row gap={4} align="center">
          <Text color="SubBlue" label={nicknameLabel} typography="NeoBodyM" />
          <Text
            color="Gray300"
            label={genderAndAgeLabel}
            typography="PFLabelS"
          />
        </Row>
        <ProfileInfoItems items={otherLabels} />
      </Col>
    </Row>
  );
};

export default PersonalProfile;

const S = {
  // TODO: 들어갈 일러스트 확정되면 대체
  LeftBox: styled.div`
    height: 142px;
    width: 142px;
    background-color: red;
  `,
};
