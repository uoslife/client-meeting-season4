import { atom } from 'jotai';
import { GroupLeaderData } from './type';

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
    page1: atom(groupLeaderInitialData.groupBranchStep.page1),
  },
  groupLeaderMyInformationStep: {
    page1: atom(groupLeaderInitialData.groupLeaderMyInformationStep.page1),
    page2: atom(groupLeaderInitialData.groupLeaderMyInformationStep.page2),
  },
  groupCreateStep: {
    page1: atom(groupLeaderInitialData.groupCreateStep.page1),
    page2: atom(groupLeaderInitialData.groupCreateStep.page2),
  },
  groupInformationStep: {
    page1: atom(groupLeaderInitialData.groupInformationStep.page1),
    page2: atom(groupLeaderInitialData.groupInformationStep.page2),
    page3: atom(groupLeaderInitialData.groupInformationStep.page3),
    page4: atom(groupLeaderInitialData.groupInformationStep.page4),
    page5: atom(groupLeaderInitialData.groupInformationStep.page5),
    page6: atom(groupLeaderInitialData.groupInformationStep.page6),
  },
  groupPreferStep: {
    page1: atom(groupLeaderInitialData.groupPreferStep.page1),
  },
  groupLeaderpledgeStep: {
    page1: atom(groupLeaderInitialData.groupLeaderpledgeStep.page1),
  },
};
