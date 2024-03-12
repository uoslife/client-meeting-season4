import { atom } from 'jotai';
import { groupDataAtoms } from './data';
import { GroupValidites, GroupValidator } from './validation.type';

export const groupValidator: GroupValidator = {
  roleSelectStep: {
    page1: ({ isLeader }) => !!isLeader,
  },
  leaderMyInformationStep: {
    page1: ({ age, gender, nickname }) => !!age && !!gender && nickname !== '',
    page2: ({ kakaoId, major, phone, studentType }) =>
      !!kakaoId && !!major && !!phone && !!studentType,
  },
  leaderGroupCreateStep: {
    page1: ({ teamName }) => !!teamName,
    page2: ({ joinCode, memberJoined }) =>
      !!joinCode && memberJoined.every(joined => joined),
  },
  leaderGroupInformationStep: {
    page1: ({ preferDayOptions }) => preferDayOptions.length > 0,
    page2: ({ answer }) => !!answer,
    page3: ({ answer }) => !!answer,
    page4: ({ answer }) => !!answer,
    page5: ({ answer }) => !!answer,
    page6: ({ message }) => !!message,
  },
  leaderPledgeStep: {
    page1: ({ checked }) => checked.every(checked => checked),
  },
  leaderPreferStep: {
    page1: ({ atmosphere, univs }) => atmosphere !== '' && univs.length > 0,
  },
  memberMyInformationStep: {
    page1: ({ nickname }) => !!nickname,
    page2: ({ kakaoId, major }) => !!kakaoId && !!major,
  },
  memberParticipateStep: {
    page1: ({ joinCode }) => !!joinCode,
  },
  memberPledgeStep: {
    page1: ({ checked }) => checked.every(checked => checked),
  },
};

export const GroupLeaderValiditesAtom = atom<GroupValidites>(get => ({
  leaderGroupCreateStep: {
    page1: groupValidator.leaderGroupCreateStep.page1(
      get(groupDataAtoms.leaderGroupCreateStep.page1),
    ),
    page2: groupValidator.leaderGroupCreateStep.page2(
      get(groupDataAtoms.leaderGroupCreateStep.page2),
    ),
  },
  leaderGroupInformationStep: {
    page1: groupValidator.leaderGroupInformationStep.page1(
      get(groupDataAtoms.leaderGroupInformationStep.page1),
    ),
    page2: groupValidator.leaderGroupInformationStep.page2(
      get(groupDataAtoms.leaderGroupInformationStep.page2),
    ),
    page3: groupValidator.leaderGroupInformationStep.page3(
      get(groupDataAtoms.leaderGroupInformationStep.page3),
    ),
    page4: groupValidator.leaderGroupInformationStep.page4(
      get(groupDataAtoms.leaderGroupInformationStep.page4),
    ),
    page5: groupValidator.leaderGroupInformationStep.page5(
      get(groupDataAtoms.leaderGroupInformationStep.page5),
    ),
    page6: groupValidator.leaderGroupInformationStep.page6(
      get(groupDataAtoms.leaderGroupInformationStep.page6),
    ),
  },
  leaderMyInformationStep: {
    page1: groupValidator.leaderMyInformationStep.page1(
      get(groupDataAtoms.leaderMyInformationStep.page1),
    ),
    page2: groupValidator.leaderMyInformationStep.page2(
      get(groupDataAtoms.leaderMyInformationStep.page2),
    ),
  },
  leaderPledgeStep: {
    page1: groupValidator.leaderPledgeStep.page1(
      get(groupDataAtoms.leaderPledgeStep.page1),
    ),
  },
  leaderPreferStep: {
    page1: groupValidator.leaderPreferStep.page1(
      get(groupDataAtoms.leaderPreferStep.page1),
    ),
  },
  memberMyInformationStep: {
    page1: groupValidator.memberMyInformationStep.page1(
      get(groupDataAtoms.memberMyInformationStep.page1),
    ),
    page2: groupValidator.memberMyInformationStep.page2(
      get(groupDataAtoms.memberMyInformationStep.page2),
    ),
  },
  memberParticipateStep: {
    page1: groupValidator.memberParticipateStep.page1(
      get(groupDataAtoms.memberParticipateStep.page1),
    ),
  },
  memberPledgeStep: {
    page1: groupValidator.memberPledgeStep.page1(
      get(groupDataAtoms.memberPledgeStep.page1),
    ),
  },
  roleSelectStep: {
    page1: groupValidator.roleSelectStep.page1(
      get(groupDataAtoms.roleSelectStep.page1),
    ),
  },
}));
