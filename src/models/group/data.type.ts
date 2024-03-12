import { atomWithStorage } from 'jotai/utils';
import { InfoOptions } from '../options';

// data model
export type GroupData = {
  // 모임을 만드시나요? 참여하시나요?
  roleSelectStep: {
    page1: { isLeader: null | boolean };
  };

  //--------------------------------------------------------//
  //----------------------- 이하 팅장  ----------------------//
  //--------------------------------------------------------//

  // 01. 나의 정보 입력하기
  leaderMyInformationStep: {
    page1: Pick<
      InfoOptions,
      | 'nickname' // 1. 이름(실명)을 입력해 주세요.
      | 'gender' // 2. 성별을 선택해 주세요.
      | 'age' // 3. 나이를 선택해 주세요.
    >;
    page2: Pick<
      InfoOptions,
      | 'kakaoId' // 4. 본인의 카카오톡 ID를 입력해 주세요.
      | 'phone' // 5. 본인의 전화번호를 입력해 주세요.
      | 'major' // 6. 본인의 학과를 입력해 주세요.
      | 'studentType' // 7. 본인의 신분을 선택해 주세요.
    >;
  };
  // 02. 팅 만들기
  leaderGroupCreateStep: {
    page1: {
      teamName: string;
    };
    page2: {
      joinCode: string;
      memberJoined: [boolean, boolean, boolean];
    };
  };
  // 03. 우리 팅 정보 입력하기
  leaderGroupInformationStep: {
    page1: Pick<InfoOptions, 'preferDayOptions'>;
    page6: {
      message: string;
    };
  } & { [key in 'page2' | 'page3' | 'page4' | 'page5']: { answer: string } };
  // 04. 만나고 싶은 팅 정보 입력하기
  leaderPreferStep: {
    page1: Pick<
      InfoOptions,
      | 'ageRange' // 1
      | 'univs' // 2
      | 'atmosphere' // 3
    >;
  };
  // 05. 시대팅 이용 서약
  leaderPledgeStep: {
    page1: {
      checked: [boolean, boolean, boolean];
    };
  };

  //--------------------------------------------------------//
  //---------------------- 이상 팅장 ------------------------//
  //--------------------------------------------------------//

  //--------------------------------------------------------//
  //---------------------- 이하 팅원 ------------------------//
  //--------------------------------------------------------//

  // 01. 나의 정보 입력하기
  memberMyInformationStep: {
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
  memberParticipateStep: {
    page1: {
      joinCode: string;
    };
  };
  // 03. 시대팅 이용 서약
  memberPledgeStep: {
    page1: {
      checked: [boolean, boolean, boolean];
    };
  };

  //--------------------------------------------------------//
  //---------------------- 이상 팅원 ------------------------//
  //--------------------------------------------------------//
};

export type GroupDataAtoms = {
  [key1 in keyof GroupData]: {
    [key2 in keyof GroupData[key1]]: ReturnType<
      typeof atomWithStorage<GroupData[key1][key2]>
    >;
  };
};
