import { ApiResponse, PromiseAxios } from '~/api/types';
import API from '~/api/core';
import {
  GetGroupStatusResponse,
  GetMeetingInfoResponse,
  GetUserResponse,
  JoinGroupUserListResponse,
  TeamType,
  UpdateInfoRequest,
  UpdatePreferRequest,
  UpdateUserRequest,
} from '~/api/types/user.type';

// 유저 기본 정보(이름, 키, 카카오톡ID, 학과, 등)
// 유저 기본 정보를 얻습니다.
const getUser = async <T = GetUserResponse>(): PromiseAxios<T> => {
  return API.get<ApiResponse<T>>('/api/user');
};

// 유저를 삭제합니다.
const resetUser = async <T = object>(): PromiseAxios<T> => {
  return API.put<ApiResponse<T>>('/api/user');
};

// 유저 기본 정보를 업데이트 합니다.
const updateUser = async <T = object>(
  data: UpdateUserRequest,
): PromiseAxios<T> => {
  return API.patch<ApiResponse<T>>('/api/user', data);
};

// 유저가 존재하는지 파악합니다.
const checkUser = async <T = boolean>(email: string): PromiseAxios<T> => {
  return API.get<ApiResponse<T>>('/api/user', { params: { email: email } });
};

// 공통
// 팅(1:1 / 3:3)을 생성합니다.
const createMeeting = async <T = string>(
  teamType: TeamType,
  isTeamLeader: boolean,
  name?: string,
): PromiseAxios<T> => {
  return API.post<ApiResponse<T>>(
    `/api/meeting/${teamType}/${isTeamLeader}/create?name=${name}`,
  );
};
// 팅 정보를 업데이트합니다.
const updateInfo = async <T = object>(
  teamType: TeamType,
  isTeamLeader: boolean,
  data: UpdateInfoRequest,
): PromiseAxios<T> => {
  return API.put<ApiResponse<T>>(
    `/api/meeting/${teamType}/${isTeamLeader}/info`,
    data,
  );
};

// 팅 선호 정보를 업데이트합니다.
const updatePrefer = async <T = object>(
  teamType: TeamType,
  isTeamLeader: boolean,
  data: UpdatePreferRequest,
): PromiseAxios<T> => {
  return API.put<ApiResponse<T>>(
    `api/meeting/${teamType}/${isTeamLeader}/prefer`,
    data,
  );
};

// 팅의 모든 정보를 받아옵니다.
const getMeetingInfo = async <T = GetMeetingInfoResponse>(
  teamType: TeamType,
): PromiseAxios<T> => {
  return API.get<ApiResponse<T>>(`/api/meeting/${teamType}/application/info`);
};

// 그룹
// 생성한 그룹에 입장합니다.
const joinGroup = async <T = JoinGroupUserListResponse>(
  teamType: TeamType,
  code: string,
  isJoin: boolean,
): PromiseAxios<T> => {
  return API.post<ApiResponse<T>>(
    `/api/meeting/${teamType}/join/${code}?isJoin=${isJoin}`,
  );
};
// 현재 입장한 팅원을 알려줍니다.
const getGroupStatus = async <T = GetGroupStatusResponse>(
  teamType: TeamType,
  code: string,
): PromiseAxios<T> => {
  return API.get<ApiResponse<T>>(
    `/api/meeting/${teamType}/join/${code}/user/list`,
  );
};

export default {
  getUser,
  resetUser,
  updateUser,
  checkUser,
  createMeeting,
  updateInfo,
  updatePrefer,
  getMeetingInfo,
  joinGroup,
  getGroupStatus,
};
