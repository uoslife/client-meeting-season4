import { InfoOptions } from '~/models/options';

// data model
export type GroupMemberData = {
  groupBranchStep: { page1: { isLeader: null | boolean } };
  // 01. 나의 정보 입력하기
  groupMemberMyInformationStep: {
    page1: Pick<
      InfoOptions,
      | 'nickname' // 1. 이름(실명)을 입력해 주세요.
      | 'gender' // 2. 성별을 선택해 주세요.
      | 'age' // 3. 나이를 선택해 주세요.
    >;
    page2: Pick<
      InfoOptions,
      | 'kakaoId' // 4. 본인의 카카오톡 ID를 입력해 주세요.
      | 'major' // 5. 본인의 학과를 입력해 주세요.
      | 'studentType' // 6. 본인의 신분을 선택해 주세요.
    >;
  };
  // 02. 팅 만들기
  groupParticipateStep: {
    page1: {
      joinCode: string;
    };
  };
  // 03. 시대팅 이용 서약
  groupMemberpledgeStep: {
    page1: {
      checked: [boolean, boolean, boolean];
    };
  };
};

// validator model
export type GroupMemberValidator = {
  [key1 in keyof GroupMemberData]: {
    [key2 in keyof GroupMemberData[key1]]: (
      pageInfo: GroupMemberData[key1][key2],
    ) => boolean;
  };
};

// validity atom value model
export type GroupMemberValidites = {
  [key1 in keyof GroupMemberData]: {
    [key2 in keyof GroupMemberData[key1]]: boolean;
  };
};
