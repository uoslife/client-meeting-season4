import { InfoOptions } from '~/models/options';

// data model
export type GroupLeaderData = {
  // 3:3 미팅 - 모임을 만드시나요? 참여하시나요?
  groupBranchStep: {
    page1: { isLeader: null | boolean };
  };
  // 01. 나의 정보 입력하기
  groupLeaderMyInformationStep: {
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
  groupCreateStep: {
    page1: {
      teamName: string;
    };
    page2: {
      joinCode: string;
      memberJoined: [boolean, boolean, boolean];
    };
  };
  // 03. 우리 팅 정보 입력하기
  groupInformationStep: {
    page1: Pick<InfoOptions, 'preferDayOptions'>;
    page6: {
      message: string;
    };
  } & { [key in 'page2' | 'page3' | 'page4' | 'page5']: { answer: string } };
  // 04. 만나고 싶은 팅 정보 입력하기
  groupPreferStep: {
    page1: Pick<
      InfoOptions,
      | 'ageRange' // 1
      | 'univs' // 2
      | 'atmosphere' // 3
    >;
  };
  // 05. 시대팅 이용 서약
  groupLeaderpledgeStep: {
    page1: {
      checked: [boolean, boolean, boolean];
    };
  };
};

// validator model
export type GroupLeaderValidator = {
  readonly [key in keyof GroupLeaderData]: {
    readonly [key2 in keyof GroupLeaderData[key]]: (
      pageInfo: GroupLeaderData[key][key2],
    ) => boolean;
  };
};

// validity atom value model
export type GroupLeaderValidites = {
  groupBranchStep: {
    page1: boolean;
  };
  groupLeaderMyInformationStep: {
    page1: boolean;
    page2: boolean;
  };
  groupCreateStep: {
    page1: boolean;
    page2: boolean;
  };
  groupInformationStep: {
    page1: boolean;
    page2: boolean;
    page3: boolean;
    page4: boolean;
    page5: boolean;
    page6: boolean;
  };
  groupPreferStep: {
    page1: boolean;
  };
  groupLeaderpledgeStep: {
    page1: boolean;
  };
};
