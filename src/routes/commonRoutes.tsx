import CommonUnivVerificationStep from '~/pages/common/univVerificationStep/Step';
import CommonBranchGatewayStep from '~/pages/common/branchGatewayStep/Step';
import CommonPaymentStep from '~/pages/common/paymentStep/Step';
import CommonPrivacyPolicyStep from '~/pages/common/privacyPolicyStep/Step';
import CommonFinishApplyStep from '~/pages/common/finishApplyStep/Step';
import CommonLandingStep from '~/pages/common/landingStep/Step';
import CommonCheckApplyInfoStep from '~/pages/common/checkApplyInfoStep/Step';
import CommonPaymentResultStep from '~/pages/common/paymentResultStep/Step';
import CommonCancelStep from '~/pages/common/cancelStep/Step';
import CommonVerifyForMatchingResultStep from '~/pages/common/verifyForMatchingResultStep/Step';
import CommonMatchingFailedStep from '~/pages/common/matchingFailedStep/Step';
import CommonMatchingSuccessfulStep from '~/pages/common/matchingSuccessfulStep/Step';
import CommonVerifyForCheckAfterAlreadyAppliedStep from '~/pages/common/verifyForCheckAfterAleadyAppliedStep/Step';
import CheckAfterAlreadyAppliedStep from '~/pages/common/checkAfterAleadyAppliedStep/Step';

const commonRoutes = [
  //--------------------------------------------------------//
  //----------------- 이하 1:1 / 3:3 분기 전 ----------------//
  //--------------------------------------------------------//

  {
    path: '/',
    element: <CommonLandingStep />,
  },
  {
    path: '/common/univVerificationStep',
    element: <CommonUnivVerificationStep />,
  },
  {
    path: '/common/branchGatewayStep',
    element: <CommonBranchGatewayStep />,
  },
  {
    path: '/common/privacyPolicyStep',
    element: <CommonPrivacyPolicyStep />,
  },

  //--------------------------------------------------------//
  //----------------- 이상 1:1 / 3:3 분기 전 ----------------//
  //--------------------------------------------------------//

  {
    path: '/common/paymentStep',
    element: <CommonPaymentStep />,
  },
  {
    path: '/common/paymentResultStep',
    element: <CommonPaymentResultStep />,
  },
  {
    path: '/common/checkApplyInfoStep',
    element: <CommonCheckApplyInfoStep />,
  },
  {
    path: '/common/finishApplyStep',
    element: <CommonFinishApplyStep />,
  },
  {
    path: '/common/checkApplyInfoStep',
    element: <CommonCheckApplyInfoStep />,
  },
  {
    path: '/common/verifyForCheckAfterAlreadyAppliedStep',
    element: <CommonVerifyForCheckAfterAlreadyAppliedStep />,
  },
  {
    path: '/common/checkAfterAlreadyAppliedStep',
    element: <CheckAfterAlreadyAppliedStep />,
  },
  {
    path: '/common/cancelStep',
    element: <CommonCancelStep />,
  },
  {
    path: '/common/verifyForMatchingResultStep',
    element: <CommonVerifyForMatchingResultStep />,
  },
  {
    path: '/common/matchingFailedStep',
    element: <CommonMatchingFailedStep />,
  },
  {
    path: '/common/matchingSuccessfulStep',
    element: <CommonMatchingSuccessfulStep />,
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
