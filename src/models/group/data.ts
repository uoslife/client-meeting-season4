import { atomWithStorage } from 'jotai/utils';
import { GroupData, GroupDataAtoms } from './data.type';

// initial values
export const groupInitialData: GroupData = {
  // 모임을 만드시나요? 참여하시나요?
  groupRoleSelectStep: {
    page1: {
      isLeader: null,
    },
  },

  //--------------------------------------------------------//
  //---------------------- 이하 팅장 ------------------------//
  //--------------------------------------------------------//

  // 1. 나의 정보 입력하기
  groupLeaderMyInformationStep: {
    page1: {
      nickname: '',
      gender: null,
      age: '20',
    },
    page2: {
      kakaoId: '',
      phone: '',
      major: '',
      studentType: null,
    },
  },
  // 2. 팅 만들기
  groupLeaderGroupCreateStep: {
    page1: {
      teamName: '',
    },
    page2: {
      joinCode: '',
      memberJoined: [false, false, false],
    },
  },
  // 3. 우리 팅 정보 입력하기
  groupLeaderGroupInformationStep: {
    page1: {
      preferDayOptions: [],
    },
    page2: { answer: '' },
    page3: { answer: '' },
    page4: { answer: '' },
    page5: { answer: '' },
    page6: { message: '' },
  },
  // 4. 만나고 싶은 팅 정보 입력하기
  groupLeaderPreferStep: {
    page1: {
      ageRange: [20, 21],
      univs: [],
      atmosphere: '',
    },
  },
  // 5. 시대팅 이용 서약
  groupLeaderPledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },

  //--------------------------------------------------------//
  //---------------------- 이상 팅장 ------------------------//
  //--------------------------------------------------------//

  //--------------------------------------------------------//
  //---------------------- 이하 팅원 ------------------------//
  //--------------------------------------------------------//

  // 1. 나의 정보 입력하기
  groupMemberMyInformationStep: {
    page1: {
      nickname: '',
      gender: null,
      age: '',
    },
    page2: {
      kakaoId: '',
      major: '',
      studentType: null,
    },
  },
  // 2. 팅 참여하기
  groupMemberParticipateStep: {
    page1: {
      joinCode: '',
    },
  },
  // 3. 시대팅 이용 서약
  groupMemberPledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },

  //--------------------------------------------------------//
  //---------------------- 이상 팅원 ------------------------//
  //--------------------------------------------------------//
};

export const groupDataAtoms: GroupDataAtoms = {
  groupRoleSelectStep: {
    page1: atomWithStorage(
      'groupRoleSelectStep-page1',
      groupInitialData.groupRoleSelectStep.page1,
    ),
  },
  groupLeaderMyInformationStep: {
    page1: atomWithStorage(
      'groupLeaderMyInformationStep-page1',
      groupInitialData.groupLeaderMyInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupLeaderMyInformationStep-page2',
      groupInitialData.groupLeaderMyInformationStep.page2,
    ),
  },
  groupLeaderGroupCreateStep: {
    page1: atomWithStorage(
      'groupLeaderGroupCreateStep-page1',
      groupInitialData.groupLeaderGroupCreateStep.page1,
    ),
    page2: atomWithStorage(
      'groupLeaderGroupCreateStep-page2',
      groupInitialData.groupLeaderGroupCreateStep.page2,
    ),
  },
  groupLeaderGroupInformationStep: {
    page1: atomWithStorage(
      'groupLeaderGroupInformationStep-page1',
      groupInitialData.groupLeaderGroupInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupLeaderGroupInformationStep-page2',
      groupInitialData.groupLeaderGroupInformationStep.page2,
    ),
    page3: atomWithStorage(
      'groupLeaderGroupInformationStep-page3',
      groupInitialData.groupLeaderGroupInformationStep.page3,
    ),
    page4: atomWithStorage(
      'groupLeaderGroupInformationStep-page4',
      groupInitialData.groupLeaderGroupInformationStep.page4,
    ),
    page5: atomWithStorage(
      'groupLeaderGroupInformationStep-page5',
      groupInitialData.groupLeaderGroupInformationStep.page5,
    ),
    page6: atomWithStorage(
      'groupLeaderGroupInformationStep-page6',
      groupInitialData.groupLeaderGroupInformationStep.page6,
    ),
  },
  groupLeaderPreferStep: {
    page1: atomWithStorage(
      'groupLeaderPreferStep-page1',
      groupInitialData.groupLeaderPreferStep.page1,
    ),
  },
  groupLeaderPledgeStep: {
    page1: atomWithStorage(
      'groupLeaderPledgeStep-page1',
      groupInitialData.groupLeaderPledgeStep.page1,
    ),
  },
  groupMemberMyInformationStep: {
    page1: atomWithStorage(
      'groupMemberMyInformationStep-page1',
      groupInitialData.groupMemberMyInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupMemberMyInformationStep-page2',
      groupInitialData.groupMemberMyInformationStep.page2,
    ),
  },
  groupMemberParticipateStep: {
    page1: atomWithStorage(
      'groupMemberParticipateStep-page1',
      groupInitialData.groupMemberParticipateStep.page1,
    ),
  },
  groupMemberPledgeStep: {
    page1: atomWithStorage(
      'groupMemberPledgeStep-page1',
      groupInitialData.groupMemberPledgeStep.page1,
    ),
  },
};
