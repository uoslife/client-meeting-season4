import { atom } from 'jotai';
import { groupDataAtoms } from './data';
import { GroupValidites, GroupValidator } from './validation.type';

export const groupValidator: GroupValidator = {
  roleSelectStep: {
    page1: ({ isLeader }) => !!isLeader,
  },
  groupLeaderMyInformationStep: {
    page1: ({ age, gender, nickname }) => !!age && !!gender && nickname !== '',
    page2: ({ kakaoId, major, phone, studentType }) =>
      !!kakaoId && !!major && !!phone && !!studentType,
  },
  groupLeaderGroupCreateStep: {
    page1: ({ teamName }) => !!teamName,
    page2: ({ joinCode, memberJoined }) =>
      !!joinCode && memberJoined.every(joined => joined),
  },
  groupLeaderGroupInformationStep: {
    page1: ({ preferDayOptions }) => preferDayOptions.length > 0,
    page2: ({ answer }) => !!answer,
    page3: ({ answer }) => !!answer,
    page4: ({ answer }) => !!answer,
    page5: ({ answer }) => !!answer,
    page6: ({ message }) => !!message,
  },
  groupLeaderPledgeStep: {
    page1: ({ checked }) => checked.every(checked => checked),
  },
  groupLeaderPreferStep: {
    page1: ({ atmosphere, univs }) => atmosphere !== '' && univs.length > 0,
  },
  groupMemberMyInformationStep: {
    page1: ({ nickname }) => !!nickname,
    page2: ({ kakaoId, major }) => !!kakaoId && !!major,
  },
  groupMemberParticipateStep: {
    page1: ({ joinCode }) => !!joinCode,
  },
  groupMemberPledgeStep: {
    page1: ({ checked }) => checked.every(checked => checked),
  },
};

export const GroupLeaderValiditesAtom = atom<GroupValidites>(get => ({
  groupLeaderGroupCreateStep: {
    page1: groupValidator.groupLeaderGroupCreateStep.page1(
      get(groupDataAtoms.groupLeaderGroupCreateStep.page1),
    ),
    page2: groupValidator.groupLeaderGroupCreateStep.page2(
      get(groupDataAtoms.groupLeaderGroupCreateStep.page2),
    ),
  },
  groupLeaderGroupInformationStep: {
    page1: groupValidator.groupLeaderGroupInformationStep.page1(
      get(groupDataAtoms.groupLeaderGroupInformationStep.page1),
    ),
    page2: groupValidator.groupLeaderGroupInformationStep.page2(
      get(groupDataAtoms.groupLeaderGroupInformationStep.page2),
    ),
    page3: groupValidator.groupLeaderGroupInformationStep.page3(
      get(groupDataAtoms.groupLeaderGroupInformationStep.page3),
    ),
    page4: groupValidator.groupLeaderGroupInformationStep.page4(
      get(groupDataAtoms.groupLeaderGroupInformationStep.page4),
    ),
    page5: groupValidator.groupLeaderGroupInformationStep.page5(
      get(groupDataAtoms.groupLeaderGroupInformationStep.page5),
    ),
    page6: groupValidator.groupLeaderGroupInformationStep.page6(
      get(groupDataAtoms.groupLeaderGroupInformationStep.page6),
    ),
  },
  groupLeaderMyInformationStep: {
    page1: groupValidator.groupLeaderMyInformationStep.page1(
      get(groupDataAtoms.groupLeaderMyInformationStep.page1),
    ),
    page2: groupValidator.groupLeaderMyInformationStep.page2(
      get(groupDataAtoms.groupLeaderMyInformationStep.page2),
    ),
  },
  groupLeaderPledgeStep: {
    page1: groupValidator.groupLeaderPledgeStep.page1(
      get(groupDataAtoms.groupLeaderPledgeStep.page1),
    ),
  },
  groupLeaderPreferStep: {
    page1: groupValidator.groupLeaderPreferStep.page1(
      get(groupDataAtoms.groupLeaderPreferStep.page1),
    ),
  },
  groupMemberMyInformationStep: {
    page1: groupValidator.groupMemberMyInformationStep.page1(
      get(groupDataAtoms.groupMemberMyInformationStep.page1),
    ),
    page2: groupValidator.groupMemberMyInformationStep.page2(
      get(groupDataAtoms.groupMemberMyInformationStep.page2),
    ),
  },
  groupMemberParticipateStep: {
    page1: groupValidator.groupMemberParticipateStep.page1(
      get(groupDataAtoms.groupMemberParticipateStep.page1),
    ),
  },
  groupMemberPledgeStep: {
    page1: groupValidator.groupMemberPledgeStep.page1(
      get(groupDataAtoms.groupMemberPledgeStep.page1),
    ),
  },
  roleSelectStep: {
    page1: groupValidator.roleSelectStep.page1(
      get(groupDataAtoms.roleSelectStep.page1),
    ),
  },
}));
