import UnivVerificationStep from '~/pages/common/univVerificationStep/Step';
import BranchGatewayStep from '~/pages/common/branchGatewayStep/Step';
import PaymentStep from '~/pages/common/paymentStep/Step';
import PrivacyPolicyStep from '~/pages/common/privacyPolicyStep /Step';
import FinishApplyStep from '~/pages/common/finishApplyStep/Step';
import CheckApplyInfoStep from '~/pages/common/checkApplyInfoStep/Step';
import LandingStep from '~/pages/common/landingStep/Step';

const commonRoutes = [
  {
    path: '/',
    element: <LandingStep />,
  },
  {
    path: '/common/univVerificationStep',
    element: <UnivVerificationStep />,
  },
  {
    path: '/common/branchGateWayStep',
    element: <BranchGatewayStep />,
  },
  {
    path: '/common/privacyPolicyStep',
    element: <PrivacyPolicyStep />,
  },
  {
    path: '/common/paymentStep',
    element: <PaymentStep />,
  },
  {
    path: '/common/checkApplyInfoStep',
    element: <CheckApplyInfoStep />,
  },
  {
    path: '/common/finishApplyStep',
    element: <FinishApplyStep />,
  },
  {
    path: '*',
    element: <div>페이지를 찾을 수 없어요!</div>,
  },
];

export default commonRoutes;
