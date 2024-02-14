import { Dispatch, SetStateAction } from 'react';

export type PageProps = {
  setIsPageFinished: Dispatch<SetStateAction<boolean>>;
};
