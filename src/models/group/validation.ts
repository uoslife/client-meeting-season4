import { atom } from 'jotai';
import { groupLeaderDataAtoms } from './data';
import { GroupValidites, GroupValidator } from './validation.type';

export const groupValidator: GroupValidator = {
  groupRoleSelectStep: {
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
      get(groupLeaderDataAtoms.groupLeaderGroupCreateStep.page1),
    ),
    page2: groupValidator.groupLeaderGroupCreateStep.page2(
      get(groupLeaderDataAtoms.groupLeaderGroupCreateStep.page2),
    ),
  },
  groupLeaderGroupInformationStep: {
    page1: groupValidator.groupLeaderGroupInformationStep.page1(
      get(groupLeaderDataAtoms.groupLeaderGroupInformationStep.page1),
    ),
    page2: groupValidator.groupLeaderGroupInformationStep.page2(
      get(groupLeaderDataAtoms.groupLeaderGroupInformationStep.page2),
    ),
    page3: groupValidator.groupLeaderGroupInformationStep.page3(
      get(groupLeaderDataAtoms.groupLeaderGroupInformationStep.page3),
    ),
    page4: groupValidator.groupLeaderGroupInformationStep.page4(
      get(groupLeaderDataAtoms.groupLeaderGroupInformationStep.page4),
    ),
    page5: groupValidator.groupLeaderGroupInformationStep.page5(
      get(groupLeaderDataAtoms.groupLeaderGroupInformationStep.page5),
    ),
    page6: groupValidator.groupLeaderGroupInformationStep.page6(
      get(groupLeaderDataAtoms.groupLeaderGroupInformationStep.page6),
    ),
  },
  groupLeaderMyInformationStep: {
    page1: groupValidator.groupLeaderMyInformationStep.page1(
      get(groupLeaderDataAtoms.groupLeaderMyInformationStep.page1),
    ),
    page2: groupValidator.groupLeaderMyInformationStep.page2(
      get(groupLeaderDataAtoms.groupLeaderMyInformationStep.page2),
    ),
  },
  groupLeaderPledgeStep: {
    page1: groupValidator.groupLeaderPledgeStep.page1(
      get(groupLeaderDataAtoms.groupLeaderPledgeStep.page1),
    ),
  },
  groupLeaderPreferStep: {
    page1: groupValidator.groupLeaderPreferStep.page1(
      get(groupLeaderDataAtoms.groupLeaderPreferStep.page1),
    ),
  },
  groupMemberMyInformationStep: {
    page1: groupValidator.groupMemberMyInformationStep.page1(
      get(groupLeaderDataAtoms.groupMemberMyInformationStep.page1),
    ),
    page2: groupValidator.groupMemberMyInformationStep.page2(
      get(groupLeaderDataAtoms.groupMemberMyInformationStep.page2),
    ),
  },
  groupMemberParticipateStep: {
    page1: groupValidator.groupMemberParticipateStep.page1(
      get(groupLeaderDataAtoms.groupMemberParticipateStep.page1),
    ),
  },
  groupMemberPledgeStep: {
    page1: groupValidator.groupMemberPledgeStep.page1(
      get(groupLeaderDataAtoms.groupMemberPledgeStep.page1),
    ),
  },
  groupRoleSelectStep: {
    page1: groupValidator.groupRoleSelectStep.page1(
      get(groupLeaderDataAtoms.groupRoleSelectStep.page1),
    ),
  },
}));
