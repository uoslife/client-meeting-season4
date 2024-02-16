import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

interface PageProps {
  pageNumber: number;
  children: ReactNode;
}

interface FunnelProps {
  children: Array<ReactNode>;
}

export const useFunnel = (pageNumberList: number[]) => {
  const [isFunnelFinished, setIsFunnelFinished] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    isFunnelFinished ? 1 : pageNumberList.length,
  );
  const Funnel = ({ children }: FunnelProps) => {
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
  };

  const Page = ({ children }: PageProps) => {
    return <>{children}</>;
  };

  return { Funnel, Page, setCurrentPage, currentPage, setIsFunnelFinished };
};
