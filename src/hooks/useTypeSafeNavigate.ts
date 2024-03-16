import { useNavigate } from 'react-router-dom';
import { CommonPath } from '~/routes/commonRoutes';
import { GroupPath } from '~/routes/groupRoutes';
import { PersonalPath } from '~/routes/personalRoutes';

const useTypeSafeNavigate = () => {
  const navigate = useNavigate();

  return (to: CommonPath | PersonalPath | GroupPath) => navigate(to);
};

export default useTypeSafeNavigate;
