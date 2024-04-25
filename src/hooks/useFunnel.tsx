import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom, useSetAtom } from 'jotai';
import { navigateNextStepAtom, pageFinishAtom } from '~/models/funnel';
import { CommonPath } from '~/routes/commonRoutes';
import { PersonalPath } from '~/routes/personalRoutes';
import { GroupPath } from '~/routes/groupRoutes';

interface PageProps {
  pageNumber: number;
  children: ReactNode;
}

interface FunnelProps {
  children: Array<ReactNode> | ReactNode;
}

type useFunnelType = {
  pageNumberList: number[];
  nextStep: {
    path: CommonPath | PersonalPath | GroupPath;
    state?: object;
  };
  prevStep: {
    path: CommonPath | PersonalPath | GroupPath;
    state?: number;
  };
};

export const useFunnel = ({
  pageNumberList,
  nextStep: { path: nextPath, state: nextState },
  prevStep: { path: prevPath, state: prevState },
}: useFunnelType) => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const setIsPageFinished = useSetAtom(pageFinishAtom); // 페이지 입력이 끝난 경우
  const [navigateNextStep, setNavigateNextStep] = useAtom(navigateNextStepAtom); // 이전 Step으로 이동 시,
  const navigate = useNavigate();
  const LAST_PAGE = pageNumberList.length;

  const FunnelComponent = useMemo(
    () =>
      ({ children }: FunnelProps) => {
        // children 검증
        const validChildren = Children.toArray(children)
          // children이 ReactElement인지
          .filter(isValidElement)
          // pageNumber props가 pageNumberList에 있는지
          .filter((childPage: ReactElement) =>
            pageNumberList.includes(childPage.props.pageNumber),
          );

        // currenPage state에 따라 현재 Page.
        const targetPage = validChildren.find(
          (child: ReactElement) => child.props.pageNumber === currentPage,
        );

        return <>{targetPage}</>;
      },
    [currentPage, pageNumberList],
  );

  const PageComponent = useMemo(
    () =>
      ({ children }: PageProps) => {
        return <>{children}</>;
      },
    [],
  );

  const Funnel = useMemo(
    () =>
      Object.assign(FunnelComponent, {
        Page: PageComponent,
      }),
    [FunnelComponent, PageComponent],
  );

  //Footer 컴포넌트 버튼 로직
  const PageHandler = useMemo(
    () => ({
      // 앞으로 가기
      onNext: () => {
        setIsPageFinished(false);
        if (currentPage === LAST_PAGE) {
          setNavigateNextStep(true);
          navigate(nextPath, { state: nextState });
          return;
        }
        setCurrentPage(currentPage + 1);
      },
      // 뒤로 가기
      onPrev: () => {
        if (currentPage === 1) {
          setNavigateNextStep(false);
          navigate(prevPath, { state: prevState });
          return;
        }
        setCurrentPage(currentPage - 1);
      },
    }),
    [
      currentPage,
      LAST_PAGE,
      setNavigateNextStep,
      setIsPageFinished,
      navigate,
      nextPath,
      nextState,
      prevPath,
      prevState,
    ],
  );

  useEffect(() => {
    navigateNextStep ? setCurrentPage(1) : setCurrentPage(LAST_PAGE);
  }, []);

  return {
    Funnel,
    currentPage,
    PageHandler,
  };
};
