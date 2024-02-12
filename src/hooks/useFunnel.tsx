import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

export interface PageProps {
  pageNumber: number;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactNode>;
}

export const useFunnel = (pageNumberList: number[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
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

  return { Funnel, Page, setCurrentPage, currentPage };
};
