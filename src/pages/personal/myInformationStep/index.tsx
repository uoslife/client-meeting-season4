import { useFunnel } from '~/hooks/useFunnel';
import Col from '~/compents/layout/Col';

const PAGE_NUMBER = [1, 2, 3, 4, 5, 6];

const MyInformationStep = () => {
  const { Funnel, Page, setCurrentPage, currentPage } = useFunnel(PAGE_NUMBER);

  return (
    <Col justify={'space-between'} align={'center'}>
      <Funnel>
        <Page pageNumber={1}>
          <div>첫 번째 페이지</div>
        </Page>
        <Page pageNumber={2}>
          <div>두 번째 페이지</div>
        </Page>
        <Page pageNumber={3}>
          <div>세 번째 페이지</div>
        </Page>
        <Page pageNumber={4}>
          <div>네 번째 페이지</div>
        </Page>
        <Page pageNumber={5}>
          <div>다섯 번째 페이지</div>
        </Page>
        <Page pageNumber={6}>
          <div>여섯 번째 페이지</div>
        </Page>
      </Funnel>
      {/*  <Footer 컴포넌트 />*/}
    </Col>
  );
};

export default MyInformationStep;
