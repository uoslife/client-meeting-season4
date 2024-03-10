import { atom } from 'jotai';
import { groupMemberDataAtoms } from './data';
import { GroupMemberValidator, GroupMemberValidites } from './type';

// used to check validity
export const groupMemberValidators: GroupMemberValidator = {
  groupBranchStep: {
    page1: ({ isLeader }) => isLeader !== null,
  },
  groupMemberMyInformationStep: {
    page1: ({ nickname }) => !!nickname,
    page2: ({ kakaoId, major }) => !!kakaoId && !!major,
  },
  groupParticipateStep: {
    page1: ({ joinCode }) => !!joinCode,
  },
  groupMemberpledgeStep: {
    page1: ({ checked }) => checked.every(checked => checked),
  },
};

// holds entireValidity, read-only, entire level
export const groupMemberValiditiesAtom = atom<GroupMemberValidites>(get => ({
  groupBranchStep: {
    page1: groupMemberValidators.groupBranchStep.page1(
      get(groupMemberDataAtoms.groupBranchStep.page1),
    ),
  },
  groupMemberMyInformationStep: {
    page1: groupMemberValidators.groupMemberMyInformationStep.page1(
      get(groupMemberDataAtoms.groupMemberMyInformationStep.page1),
    ),
    page2: groupMemberValidators.groupMemberMyInformationStep.page2(
      get(groupMemberDataAtoms.groupMemberMyInformationStep.page2),
    ),
  },
  groupParticipateStep: {
    page1: groupMemberValidators.groupParticipateStep.page1(
      get(groupMemberDataAtoms.groupParticipateStep.page1),
    ),
  },
  groupMemberpledgeStep: {
    page1: groupMemberValidators.groupMemberpledgeStep.page1(
      get(groupMemberDataAtoms.groupMemberpledgeStep.page1),
    ),
  },
}));
