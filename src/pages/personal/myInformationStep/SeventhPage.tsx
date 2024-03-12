import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { pageFinishAtom } from '~/store/funnel';

const SeventhPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.myInformationStep.page7,
  );

  const { message } = pageState;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms).myInformationStep
    .page7;
  setIsPageFinished(!!pageValidity);

  return (
    <PageLayout.SingleCardBody>
      <Paddler top={36} right={20} bottom={24} left={20}>
        <input
          onChange={e =>
            setPageState(prev => ({ ...prev, message: e.target.value }))
          }
          value={message}
        />
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default SeventhPage;
