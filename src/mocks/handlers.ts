import { HttpResponse, http } from 'msw';

export function handlers() {
  return [
    ...meetingHandlers(),
    ...paymentHandlers(),
    ...matchingHandlers(),
    ...verificationHandlers(),
    ...userHandlers(),
  ];
}

const meetingHandlers = () => {
  return [
    http.post('/api/meeting/:teamType/:isTeamLeader/prefer', createPreferInfo),
    http.post('/api/meeting/:teamType/:isTeamLeader/info', createTeamInfo),
    http.post('/api/meeting/:teamType/:isTeamLeader/create', createTeam),
    http.post('/api/meeting/:teamType/join/:code', joinTeam),
    http.get(
      '/api/meeting/:teamType/join/:code/user/list',
      getTeamUserListOnPending,
    ),
    http.get('/api/meeting/:teamType/application/info', getAllTeamInfo),
    http.delete('/api/meeting/:teamType/:isTeamLeader', deleteTeam),
  ];
};

const createPreferInfo = () => {
  return HttpResponse.json({}, { status: 200 });
};
const createTeamInfo = () => {
  return HttpResponse.json({}, { status: 200 });
};
const createTeam = () => {
  return HttpResponse.json({}, { status: 200 });
};
const joinTeam = () => {
  return HttpResponse.json(
    {
      data: {
        teamName: 'mock-팀이름',
        userList: [
          {
            name: '시대생1',
          },
          {
            name: '시대생2',
          },
        ],
      },
    },
    { status: 200 },
  );
};
const getTeamUserListOnPending = () => {
  return HttpResponse.json(
    {
      data: {
        teamName: 'mock-팀이름',
        userList: [
          {
            name: '시대생1',
          },
          {
            name: '시대생2',
          },
        ],
      },
    },
    { status: 200 },
  );
};
const getAllTeamInfo = () => {
  return HttpResponse.json({ data: 팀전체정보 }, { status: 200 });
};
const deleteTeam = () => {
  return HttpResponse.json({}, { status: 204 });
};

const paymentHandlers = () => {
  return [
    http.post('/api/payment/request', requestPayment),
    http.post('/api/payment/refund', refundPayment),
    http.post('/api/payment/refund/match', canclePayment),
    http.post('/api/payment/check', checkPayment),
  ];
};

const requestPayment = () => {
  return HttpResponse.json(
    {
      data: {
        merchantUid: 'mock-merchant-uid',
        price: 3000,
        phoneNumber: '010-0000-0000',
      },
    },
    { status: 200 },
  );
};
const refundPayment = () => {
  return HttpResponse.json(
    {
      data: {
        cancelSuccess: true,
        message: 'mock-message',
      },
    },
    { status: 200 },
  );
};
const canclePayment = () => {
  return HttpResponse.json(
    {
      data: {
        successCount: 0,
        failedCount: 0,
        refundList: [
          {
            cancelSuccess: true,
            message: 'mock-message',
          },
        ],
      },
    },
    { status: 200 },
  );
};
const checkPayment = () => {
  return HttpResponse.json(
    {
      data: {
        paymentSuccess: true,
        message: 'mock-message',
      },
    },
    { status: 200 },
  );
};

const matchingHandlers = () => {
  return [http.get('/api/match', getMatchedTeamInfo)];
};

const getMatchedTeamInfo = () => {
  return HttpResponse.json({ data: 팀전체정보 }, { status: 200 });
};

const verificationHandlers = () => {
  return [
    http.post('/api/verification/send', sendVerificationMail),
    http.post('/api/verification/check', checkVerificationCode),
  ];
};

const sendVerificationMail = () => {
  const accessToken = localStorage.getItem('accessToken');
  return HttpResponse.json(
    {
      data: {
        success: true,
      },
    },
    { status: accessToken ? 200 : 401 },
  );
};

const checkVerificationCode = async () => {
  return HttpResponse.json(
    {
      data: {
        accessToken: 'access-token-mock',
        refreshToken: 'refresh-token-mock',
      },
    },
    { status: 200 },
  );
};

const userHandlers = () => {
  return [
    http.get('/api/user', getUser),
    http.put('/api/user', resetUser),
    http.post('/api/user', updateUser),
    http.post('/api/refreshToken', getRefreshToken),
  ];
};

const getUser = () => {
  return HttpResponse.json(
    {
      data: {
        name: '이루매',
        age: 24,
        height: 170,
        university: 'UOS',
        department: '경제학과',
        studentType: 'UNDERGRADUATE',
        kakaoTalkId: 'kakaoId',
        smoking: 'TRUE',
        drinkingMin: 0,
        drinkingMax: 0,
        spiritAnimal: ['DOG'],
        mbti: 'string',
        interest: ['BOOK'],
      },
    },
    { status: 200 },
  );
};

const resetUser = () => {
  return HttpResponse.json({}, { status: 200 });
};

const updateUser = () => {
  return HttpResponse.json({}, { status: 200 });
};

const getRefreshToken = () => {
  return HttpResponse.json(
    {
      data: {
        accessToken: 'access-token-mock2',
        refreshToken: 'refresh-token-mock2',
      },
    },
    { status: 200 },
  );
};

const 팀전체정보 = {
  teamType: 'SINGLE',
  teamName: 'mock-팀이름',
  sex: 'MALE',
  teamUserList: [
    {
      name: '이루매',
      age: 24,
      height: 170,
      university: 'UOS',
      department: '경제학과',
      studentType: 'UNDERGRADUATE',
      kakaoTalkId: 'kakaoId',
      smoking: 'TRUE',
      drinkingMin: 0,
      drinkingMax: 0,
      spiritAnimal: ['DOG'],
      mbti: 'string',
      interest: ['BOOK'],
    },
    {
      name: '이루매',
      age: 24,
      height: 170,
      university: 'UOS',
      department: '경제학과',
      studentType: 'UNDERGRADUATE',
      kakaoTalkId: 'kakaoId',
      smoking: 'TRUE',
      drinkingMin: 0,
      drinkingMax: 0,
      spiritAnimal: ['DOG'],
      mbti: 'string',
      interest: ['BOOK'],
    },
    {
      name: '이루매',
      age: 24,
      height: 170,
      university: 'UOS',
      department: '경제학과',
      studentType: 'UNDERGRADUATE',
      kakaoTalkId: 'kakaoId',
      smoking: 'TRUE',
      drinkingMin: 0,
      drinkingMax: 0,
      spiritAnimal: ['DOG'],
      mbti: 'string',
      interest: ['BOOK'],
    },
  ],
  information: {
    gender: 'MALE',
    questions: {
      additionalProp1: {},
      additionalProp2: {},
      additionalProp3: {},
    },
  },
  preference: {
    ageMin: 20,
    ageMax: 25,
    heightMin: 170,
    heightMax: 180,
    studentType: ['UNDERGRADUATE'],
    university: ['UOS'],
    religion: ['CHRISTIAN'],
    smoking: ['TRUE'],
    spiritAnimal: ['DOG'],
    mbti: ['ENFP'],
    mood: 'ACTIVE',
  },
};
