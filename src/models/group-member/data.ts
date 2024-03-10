import { GroupMemberData } from './type';
import { atomWithStorage } from 'jotai/utils';

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
    page1: atomWithStorage(
      'groupBranchStep-page1',
      groupMemberInitialData.groupBranchStep.page1,
    ),
  },
  groupMemberMyInformationStep: {
    page1: atomWithStorage(
      'groupMemberMyInformationStep-page1',
      groupMemberInitialData.groupMemberMyInformationStep.page1,
    ),
    page2: atomWithStorage(
      'groupMemberMyInformationStep-page2',
      groupMemberInitialData.groupMemberMyInformationStep.page2,
    ),
  },
  groupParticipateStep: {
    page1: atomWithStorage(
      'groupParticipateStep-page1',
      groupMemberInitialData.groupParticipateStep.page1,
    ),
  },
  groupMemberpledgeStep: {
    page1: atomWithStorage(
      'groupMemberpledgeStep-page1',
      groupMemberInitialData.groupMemberpledgeStep.page1,
    ),
  },
};
