import API, { API_URL } from '~/api/core';
import {
  GetGroupStatusResponse,
  GetMeetingInfoResponse,
  GetUserResponse,
  JoinGroupUserListResponse,
  TeamType,
  UpdateInfoRequest,
  UpdateMessageRequest,
  UpdatePreferRequest,
  UpdateUserRequest,
} from '~/api/types/user.type';

// 유저 기본 정보(이름, 키, 카카오톡ID, 학과, 등)
// 유저를 생성합니다.
const createUser = async () => API.post(`${API_URL.MEETING}/api/user`);
// 유저 기본 정보를 얻습니다.
const getUser = async <T = GetUserResponse>() =>
  API.get<T>(`${API_URL.MEETING}/api/user`);

// 유저를 삭제합니다.
const deleteUser = async () => API.delete(`${API_URL.MEETING}/api/user`);

// 유저 기본 정보를 업데이트 합니다.
const updateUser = async <T = object>(data: UpdateUserRequest) =>
  API.patch<T>(`${API_URL.MEETING}/api/user`, data);

// 유저가 존재하는지 파악합니다.
const checkUser = async <T = boolean>(email: string) =>
  API.get<T>(`${API_URL.MEETING}/api/user`, { params: { email: email } });

// 공통
// 팅(1:1 / 3:3)을 생성합니다.
const createMeeting = async <
  T = {
    code: string | null;
  },
>(
  teamType: TeamType,
  isTeamLeader: boolean,
  name?: string,
) =>
  API.post<T>(
    `${API_URL.MEETING}/api/meeting/${teamType}/${isTeamLeader}/create?name=${name}`,
  );

// 팅(1:1 / 3:3)을 삭제합니다.
const deleteMeeting = async (teamType: TeamType, isTeamLeader: boolean) =>
  API.delete(`${API_URL.MEETING}/api/meeting/${teamType}/${isTeamLeader}`);
// 팅 정보를 업데이트합니다.
const updateInfo = async <T = object>(
  teamType: TeamType,
  isTeamLeader: boolean,
  data: UpdateInfoRequest,
) =>
  API.put<T>(
    `${API_URL.MEETING}/api/meeting/${teamType}/${isTeamLeader}/info`,
    data,
  );

// 팅 선호 정보를 업데이트합니다.
const updatePrefer = async <T = object>(
  teamType: TeamType,
  isTeamLeader: boolean,
  data: UpdatePreferRequest,
) =>
  API.put<T>(
    `${API_URL.MEETING}/api/meeting/${teamType}/${isTeamLeader}/prefer`,
    data,
  );

const updateMessage = async (
  teamType: TeamType,
  isTeamLeader: boolean,
  data: UpdateMessageRequest,
) =>
  API.put(
    `${API_URL.MEETING}/api/meeting/${teamType}/${isTeamLeader}/message`,
    data,
  );

// 팅의 모든 정보를 받아옵니다.
const getMeetingInfo = async <T = GetMeetingInfoResponse>(teamType: TeamType) =>
  API.get<T>(`${API_URL.MEETING}/api/meeting/${teamType}/application/info`);

const getMatchingInfo = async <T = GetMeetingInfoResponse>() =>
  API.get<T>(`${API_URL.MEETING}/api/match`);

// 그룹
// 생성한 그룹에 입장합니다.
const joinGroup = async <T = JoinGroupUserListResponse>(
  teamType: TeamType,
  code: string,
  isJoin: boolean,
) =>
  API.post<T>(
    `${API_URL.MEETING}/api/meeting/${teamType}/join/${code}?isJoin=${isJoin}`,
  );

// 현재 입장한 팅원을 알려줍니다.
const getGroupStatus = async <T = GetGroupStatusResponse>(
  teamType: TeamType,
  code: string,
) => API.get<T>(`${API_URL.MEETING}/api/meeting/${teamType}/${code}/user/list`);

// 현재 입장한 팅원을 알려줍니다.
const checkDuplicatedKakaotalkId = async (kakaotalkId: string) =>
  API.get(`${API_URL.MEETING}/api/user/isDuplicatedKakaoTalkId`, {
    params: { kakaoTalkId: kakaotalkId },
  });

export default {
  createUser,
  getUser,
  updateUser,
  checkUser,
  deleteUser,
  createMeeting,
  deleteMeeting,
  updateInfo,
  updatePrefer,
  getMeetingInfo,
  joinGroup,
  getGroupStatus,
  getMatchingInfo,
  updateMessage,
  checkDuplicatedKakaotalkId,
};
