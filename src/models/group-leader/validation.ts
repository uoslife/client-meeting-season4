import { atom } from 'jotai';
import { GroupLeaderValidator, GroupLeaderValidites } from './type';
import { groupLeaderDataAtoms } from './data';

export const groupLeaderValidatiors: GroupLeaderValidator = {
  groupBranchStep: {
    page1: pageInfo => !!pageInfo.isLeader,
  },
  groupLeaderMyInformationStep: {
    page1: ({ age, gender, nickname }) => !!age && !!gender && nickname !== '',
    page2: ({ kakaoId, major, phone, studentType }) =>
      !!kakaoId && !!major && !!phone && !!studentType,
  },
  groupCreateStep: {
    page1: ({ teamName }) => !!teamName,
    page2: ({ joinCode, memberJoined }) =>
      !!joinCode && memberJoined.every(joined => joined),
  },
  groupInformationStep: {
    page1: ({ preferDayOptions }) => preferDayOptions.length > 0,
    page2: ({ answer }) => !!answer,
    page3: ({ answer }) => !!answer,
    page4: ({ answer }) => !!answer,
    page5: ({ answer }) => !!answer,
    page6: ({ message }) => !!message,
  },
  groupLeaderpledgeStep: {
    page1: ({ checked }) => checked.every(checked => checked),
  },
  groupPreferStep: {
    page1: ({ atmosphere, univs }) => atmosphere !== '' && univs.length > 0,
  },
};

export const groupLeaderValiditesAtom = atom<GroupLeaderValidites>(get => ({
  groupBranchStep: {
    page1: groupLeaderValidatiors.groupBranchStep.page1(
      get(groupLeaderDataAtoms.groupBranchStep.page1),
    ),
  },
  groupCreateStep: {
    page1: groupLeaderValidatiors.groupCreateStep.page1(
      get(groupLeaderDataAtoms.groupCreateStep.page1),
    ),
    page2: groupLeaderValidatiors.groupCreateStep.page2(
      get(groupLeaderDataAtoms.groupCreateStep.page2),
    ),
  },
  groupInformationStep: {
    page1: groupLeaderValidatiors.groupInformationStep.page1(
      get(groupLeaderDataAtoms.groupInformationStep.page1),
    ),
    page2: groupLeaderValidatiors.groupInformationStep.page2(
      get(groupLeaderDataAtoms.groupInformationStep.page2),
    ),
    page3: groupLeaderValidatiors.groupInformationStep.page3(
      get(groupLeaderDataAtoms.groupInformationStep.page3),
    ),
    page4: groupLeaderValidatiors.groupInformationStep.page4(
      get(groupLeaderDataAtoms.groupInformationStep.page4),
    ),
    page5: groupLeaderValidatiors.groupInformationStep.page5(
      get(groupLeaderDataAtoms.groupInformationStep.page5),
    ),
    page6: groupLeaderValidatiors.groupInformationStep.page6(
      get(groupLeaderDataAtoms.groupInformationStep.page6),
    ),
  },
  groupLeaderMyInformationStep: {
    page1: groupLeaderValidatiors.groupLeaderMyInformationStep.page1(
      get(groupLeaderDataAtoms.groupLeaderMyInformationStep.page1),
    ),
    page2: groupLeaderValidatiors.groupLeaderMyInformationStep.page2(
      get(groupLeaderDataAtoms.groupLeaderMyInformationStep.page2),
    ),
  },
  groupLeaderpledgeStep: {
    page1: groupLeaderValidatiors.groupLeaderpledgeStep.page1(
      get(groupLeaderDataAtoms.groupLeaderpledgeStep.page1),
    ),
  },
  groupPreferStep: {
    page1: groupLeaderValidatiors.groupPreferStep.page1(
      get(groupLeaderDataAtoms.groupPreferStep.page1),
    ),
  },
}));
