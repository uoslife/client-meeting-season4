import { atom } from 'jotai';
import { GroupMemberData } from './type';

// initial values
export const groupMemberInitialData: GroupMemberData = {
  groupBranchStep: {
    page1: {
      isLeader: null,
    },
  },
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
  groupParticipateStep: {
    page1: {
      joinCode: '',
    },
  },
  groupMemberpledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },
};

// page level atom: each holds data, write/read
export const groupMemberDataAtoms = {
  groupBranchStep: {
    page1: atom(groupMemberInitialData.groupBranchStep.page1),
  },
  groupMemberMyInformationStep: {
    page1: atom(groupMemberInitialData.groupMemberMyInformationStep.page1),
    page2: atom(groupMemberInitialData.groupMemberMyInformationStep.page2),
  },
  groupParticipateStep: {
    page1: atom(groupMemberInitialData.groupParticipateStep.page1),
  },
  groupMemberpledgeStep: {
    page1: atom(groupMemberInitialData.groupMemberpledgeStep.page1),
  },
};
