import UnivVerificationStep from '~/pages/common/univVerificationStep/Step';
import BranchGatewayStep from '~/pages/common/branchGatewayStep/Step';
import PaymentStep from '~/pages/common/paymentStep/Step';
import PrivacyPolicyStep from '~/pages/common/privacyPolicyStep/Step';
import FinishApplyStep from '~/pages/common/finishApplyStep/Step';
import LandingStep from '~/pages/common/landingStep/Step';
import CheckApplyInfoStep from '~/pages/common/checkApplyInfoStep/Step';
import PaymentResultStep from '~/pages/common/paymentResultStep/Step';

const commonRoutes = [
  {
    path: '/common/landingStep',
    element: <LandingStep />,
  },
  {
    path: '/common/univVerificationStep',
    element: <UnivVerificationStep />,
  },
  {
    path: '/common/branchGatewayStep',
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
    path: '/common/paymentResultStep',
    element: <PaymentResultStep />,
  },
  {
    path: '/common/finishApplyStep',
    element: <FinishApplyStep />,
  },
  {
    path: '/common/checkApplyInfoStep',
    element: <CheckApplyInfoStep />,
  },
  {
    path: '*',
    element: <div>페이지를 찾을 수 없어요!</div>,
  },
] as const;

export default commonRoutes;

export type CommonPath = Extract<
  (typeof commonRoutes)[number]['path'],
  `/${string}`
>;

export type CommonPathPostfixes =
  Extract<CommonPath, `/common/${string}`> extends `/common/${infer T}`
    ? T
    : never;
