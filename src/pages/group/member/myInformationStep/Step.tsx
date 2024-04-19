import PageLayout from '~/components/layout/page/PageLayout';
import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { groupDataAtoms } from '~/models/group/data';
import { useAtomValue } from 'jotai';
import { MeetingAPI } from '~/api';

const STUDENT_MAP = {
  학부생: 'UNDERGRADUATE',
  대학원생: 'POSTGRADUATE',
  졸업생: 'GRADUATE',
} as const;

const useApi = () => {
  const { name, age, kakaoId } = useAtomValue(
    groupDataAtoms.groupMemberMyInformationStep.page1,
  );

  const { major, studentType } = useAtomValue(
    groupDataAtoms.groupMemberMyInformationStep.page2,
  );

  const updateUser = () => {
    const body = {
      name,
      age: Number(age.replace('~', '')),
      kakaoTalkId: kakaoId,
      department: major,
      studentType: STUDENT_MAP[studentType!],
      gender: null,
      height: null,
      phoneNumber: null,
      drinkingMin: null,
      drinkingMax: null,
      interest: null,
      mbti: null,
      religion: null,
      smoking: null,
      spiritAnimal: null,
    };

    return MeetingAPI.updateUser(body);
  };

  return { updateUser };
};

const GroupMemberMyInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: [1, 2] as const,
    prevStep: { path: '/group/roleSelectStep' },
    nextStep: { path: '/group/member/participateStep' },
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
        totalStep={3}
        currentStep={1}
      />
      <PageLayout.SingleCardBody>
        <Funnel>
          <Funnel.Page pageNumber={1}>
            <FirstPage />
          </Funnel.Page>
          <Funnel.Page pageNumber={2}>
            <SecondPage />
          </Funnel.Page>
        </Funnel>
      </PageLayout.SingleCardBody>
      <PageLayout.Footer
        currentPage={currentPage}
        totalPage={2}
        onNext={onNext}
        onPrev={PageHandler.onPrev}
      />
    </PageLayout>
  );
};

export default GroupMemberMyInformationStep;
