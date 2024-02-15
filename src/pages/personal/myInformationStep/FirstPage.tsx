import { PageProps } from '~/types/page.type';
import { useEffect, useState } from 'react';

const FirstPage = ({ setIsPageFinished }: PageProps) => {
  const [abc, setAbc] = useState(false);

  useEffect(() => {
    abc ? setIsPageFinished(true) : setIsPageFinished(false);
  }, [abc, setAbc]);

  return <div>dsds</div>;
};

export default FirstPage;
