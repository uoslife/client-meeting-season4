import { DirectoryViewItemType } from './DirectoryViewInfoList';
import { ProfileViewData } from './Profile';

export type MatchingInfoCardProps = {
  kakaoId: string[];
  message: string;
  profileViewData: ProfileViewData;
  directoryViewItems: DirectoryViewItemType[];
};

const MatchingCard = ({
  directoryViewItems,
  kakaoId,
  message,
  profileViewData,
}: MatchingInfoCardProps) => {
  return <div></div>;
};

export default MatchingCard;
