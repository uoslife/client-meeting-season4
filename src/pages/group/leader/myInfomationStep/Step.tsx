import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import PageLayout from '~/components/layout/page/PageLayout';
import { useAtomValue } from 'jotai';
import { groupDataAtoms } from '~/models/group/data';
import { MeetingAPI } from '~/api';

const STUDENT_MAP = {
  학부생: 'UNDERGRADUATE',
  대학원생: 'POSTGRADUATE',
  졸업생: 'GRADUATE',
} as const;

const useApi = () => {
  const { name, gender, age } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page1,
  );

  const { kakaoId, phone, major, studentType } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page2,
  );

  const updateUser = () => {
    const body = {
      name,
      age: Number(age.replace('~', '')),
      kakaoTalkId: kakaoId,
      department: major,
      studentType: STUDENT_MAP[studentType!],
      gender: gender!,
      height: null,
      phoneNumber: phone,
      drinkingMin: null,
      drinkingMax: null,
      interest: null,
      mbti: null,
      religion: null,
      smoking: null,
      spiritAnimal: null,
    };

    MeetingAPI.updateUser(body);
  };

  return { updateUser };
};

const PAGE_NUMBER = [1, 2];

const GroupLeaderMyInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/group/roleSelectStep' },
    nextStep: { path: '/group/leader/createStep' },
  });

  const { updateUser } = useApi();

  const onNext = async () => {
    if (currentPage === 2) {
      await updateUser();
    }
    PageHandler.onNext();
  };

  return (
    <PageLayout>
      <PageLayout.Header
        title={'01. 나의 정보 입력하기'}
        isProgress={true}
        currentStep={1}
        totalStep={7}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={2}>
          <SecondPage />
        </Funnel.Page>
      </Funnel>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={PAGE_NUMBER.length}
        onNext={onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupLeaderMyInformationStep;
