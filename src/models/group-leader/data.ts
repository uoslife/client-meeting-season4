import { GroupLeaderData } from './type';
import { atomWithStorage } from 'jotai/utils';

// initial values
export const groupLeaderInitialData: GroupLeaderData = {
  groupBranchStep: {
    page1: {
      isLeader: null,
    },
  },
  groupLeaderMyInformationStep: {
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
  groupCreateStep: {
    page1: {
      teamName: '',
    },
    page2: {
      joinCode: '',
      memberJoined: [false, false, false],
    },
  },
  groupInformationStep: {
    page1: {
      preferDayOptions: [],
    },
    page2: { answer: '' },
    page3: { answer: '' },
    page4: { answer: '' },
    page5: { answer: '' },
    page6: { message: '' },
  },
  groupPreferStep: {
    page1: {
      ageRange: [20, 21],
      univs: [],
      atmosphere: '',
    },
  },
  groupLeaderpledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },
};

export const groupLeaderDataAtoms = {
  groupBranchStep: {
    page1: atomWithStorage(
      'groupBranchStep-page1',
      groupLeaderInitialData.groupBranchStep.page1,
    ),
  },
  groupLeaderMyInformationStep: {
    page1: atomWithStorage(
      'groupLeaderMyInformationStep-page1',
      groupLeaderInitialData.groupLeaderMyInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupLeaderMyInformationStep-page2',
      groupLeaderInitialData.groupLeaderMyInformationStep.page2,
    ),
  },
  groupCreateStep: {
    page1: atomWithStorage(
      'groupCreateStep-page1',
      groupLeaderInitialData.groupCreateStep.page1,
    ),
    page2: atomWithStorage(
      'groupCreateStep-page2',
      groupLeaderInitialData.groupCreateStep.page2,
    ),
  },
  groupInformationStep: {
    page1: atomWithStorage(
      'groupInformationStep-page1',
      groupLeaderInitialData.groupInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupInformationStep-page2',
      groupLeaderInitialData.groupInformationStep.page2,
    ),
    page3: atomWithStorage(
      'groupInformationStep-page3',
      groupLeaderInitialData.groupInformationStep.page3,
    ),
    page4: atomWithStorage(
      'groupInformationStep-page4',
      groupLeaderInitialData.groupInformationStep.page4,
    ),
    page5: atomWithStorage(
      'groupInformationStep-page5',
      groupLeaderInitialData.groupInformationStep.page5,
    ),
    page6: atomWithStorage(
      'groupInformationStep-page6',
      groupLeaderInitialData.groupInformationStep.page6,
    ),
  },
  groupPreferStep: {
    page1: atomWithStorage(
      'groupPreferStep-page1',
      groupLeaderInitialData.groupPreferStep.page1,
    ),
  },
  groupLeaderpledgeStep: {
    page1: atomWithStorage(
      'groupLeaderPledgeStep-page1',
      groupLeaderInitialData.groupLeaderpledgeStep.page1,
    ),
  },
};
