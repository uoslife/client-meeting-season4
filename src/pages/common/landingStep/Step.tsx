import { useNavigate } from 'react-router-dom';

const LandingStep = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/common/univVerificationStep')}>이동하기</div>
  );
};

export default LandingStep;
