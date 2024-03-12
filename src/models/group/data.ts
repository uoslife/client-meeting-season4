import { atomWithStorage } from 'jotai/utils';
import { GroupData, GroupDataAtoms } from './data.type';

// initial values
export const groupInitialData: GroupData = {
  // 모임을 만드시나요? 참여하시나요?
  roleSelectStep: {
    page1: {
      isLeader: null,
    },
  },

  //--------------------------------------------------------//
  //---------------------- 이하 팅장 ------------------------//
  //--------------------------------------------------------//

  // 1. 나의 정보 입력하기
  leaderMyInformationStep: {
    page1: {
      nickname: '',
      gender: null,
      age: null,
    },
    page2: {
      kakaoId: '',
      phone: '',
      major: '',
      studentType: null,
    },
  },
  // 2. 팅 만들기
  leaderGroupCreateStep: {
    page1: {
      teamName: '',
    },
    page2: {
      joinCode: '',
      memberJoined: [false, false, false],
    },
  },
  // 3. 우리 팅 정보 입력하기
  leaderGroupInformationStep: {
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
  leaderPreferStep: {
    page1: {
      ageRange: [20, 21],
      univs: [],
      atmosphere: '',
    },
  },
  // 5. 시대팅 이용 서약
  leaderPledgeStep: {
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
  memberMyInformationStep: {
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
  memberParticipateStep: {
    page1: {
      joinCode: '',
    },
  },
  // 3. 시대팅 이용 서약
  memberPledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },

  //--------------------------------------------------------//
  //---------------------- 이상 팅원 ------------------------//
  //--------------------------------------------------------//
};

export const groupDataAtoms: GroupDataAtoms = {
  roleSelectStep: {
    page1: atomWithStorage(
      'roleSelectStep-page1',
      groupInitialData.roleSelectStep.page1,
    ),
  },
  leaderMyInformationStep: {
    page1: atomWithStorage(
      'groupLeaderMyInformationStep-page1',
      groupInitialData.leaderMyInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupLeaderMyInformationStep-page2',
      groupInitialData.leaderMyInformationStep.page2,
    ),
  },
  leaderGroupCreateStep: {
    page1: atomWithStorage(
      'groupLeaderGroupCreateStep-page1',
      groupInitialData.leaderGroupCreateStep.page1,
    ),
    page2: atomWithStorage(
      'groupLeaderGroupCreateStep-page2',
      groupInitialData.leaderGroupCreateStep.page2,
    ),
  },
  leaderGroupInformationStep: {
    page1: atomWithStorage(
      'groupLeaderGroupInformationStep-page1',
      groupInitialData.leaderGroupInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupLeaderGroupInformationStep-page2',
      groupInitialData.leaderGroupInformationStep.page2,
    ),
    page3: atomWithStorage(
      'groupLeaderGroupInformationStep-page3',
      groupInitialData.leaderGroupInformationStep.page3,
    ),
    page4: atomWithStorage(
      'groupLeaderGroupInformationStep-page4',
      groupInitialData.leaderGroupInformationStep.page4,
    ),
    page5: atomWithStorage(
      'groupLeaderGroupInformationStep-page5',
      groupInitialData.leaderGroupInformationStep.page5,
    ),
    page6: atomWithStorage(
      'groupLeaderGroupInformationStep-page6',
      groupInitialData.leaderGroupInformationStep.page6,
    ),
  },
  leaderPreferStep: {
    page1: atomWithStorage(
      'groupLeaderPreferStep-page1',
      groupInitialData.leaderPreferStep.page1,
    ),
  },
  leaderPledgeStep: {
    page1: atomWithStorage(
      'groupLeaderPledgeStep-page1',
      groupInitialData.leaderPledgeStep.page1,
    ),
  },
  memberMyInformationStep: {
    page1: atomWithStorage(
      'groupMemberMyInformationStep-page1',
      groupInitialData.memberMyInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupMemberMyInformationStep-page2',
      groupInitialData.memberMyInformationStep.page2,
    ),
  },
  memberParticipateStep: {
    page1: atomWithStorage(
      'groupMemberParticipateStep-page1',
      groupInitialData.memberParticipateStep.page1,
    ),
  },
  memberPledgeStep: {
    page1: atomWithStorage(
      'groupMemberPledgeStep-page1',
      groupInitialData.memberPledgeStep.page1,
    ),
  },
};
