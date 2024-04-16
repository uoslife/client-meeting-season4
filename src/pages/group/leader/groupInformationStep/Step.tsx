import { useFunnel } from '~/hooks/useFunnel';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';
import FifthPage from './FifthPage';
import PageLayout from '~/components/layout/page/PageLayout';
import SixthPage from './SixthPage';
import { useAtomValue } from 'jotai';
import { groupDataAtoms } from '~/models/group/data';
import { MeetingAPI } from '~/api';

const useApi = () => {
  // 미팅 요일
  const { preferDayOptions } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page1,
  );

  function convertDaysToDecimal(preferDayOptions: string[]) {
    const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

    const binaryString = daysOfWeek
      .map(day => (preferDayOptions.includes(day) ? '1' : '0'))
      .join('');

    const decimal = parseInt(binaryString, 2);

    return decimal;
  }
  const decimalMeetingDay = convertDaysToDecimal(preferDayOptions);

  // 우리 팅 정보 입력
  const { answer: a1 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page2,
  );
  const { answer: a2 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page3,
  );
  const { answer: a3 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page4,
  );
  const { answer: a4 } = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page5,
  );

  const updateInfoBody = { questions: [decimalMeetingDay, a1!, a2!, a3!, a4!] };

  const updateInfo = () =>
    MeetingAPI.updateInfo('TRIPLE', true, updateInfoBody);

  // 상대에게 전하는 메세지
  const message = useAtomValue(
    groupDataAtoms.groupLeaderGroupInformationStep.page6,
  );
  const updateMessage = () => {
    MeetingAPI.updateMessage('TRIPLE', true, message);
  };

  return { updateInfo, updateMessage };
};

const PAGE_NUMBER = [1, 2, 3, 4, 5, 6];

const GroupLeaderGroupInformationStep = () => {
  const { Funnel, currentPage, PageHandler } = useFunnel({
    pageNumberList: PAGE_NUMBER,
    prevStep: { path: '/group/leader/createStep' },
    nextStep: { path: '/group/leader/preferStep' },
    // 기획에게 뒤로 가기 시, 팅 참여 항목으로 다시 돌아가게끔 할 것인지 물어보기
  });

  const { updateInfo, updateMessage } = useApi();

  const onNext = async () => {
    if (currentPage === 5) {
      await updateInfo();
    } else if (currentPage === 6) {
      await updateMessage();
    }
    PageHandler.onNext();
  };

  return (
    <PageLayout>
      <PageLayout.Header
        title={'03. 우리 팅 정보 입력하기'}
        isProgress={true}
        currentStep={3}
        totalStep={7}
      />
      <Funnel>
        <Funnel.Page pageNumber={1}>
          <FirstPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={2}>
          <SecondPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={3}>
          <ThirdPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={4}>
          <ForthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={5}>
          <FifthPage />
        </Funnel.Page>
        <Funnel.Page pageNumber={6}>
          <SixthPage />
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

export default GroupLeaderGroupInformationStep;
