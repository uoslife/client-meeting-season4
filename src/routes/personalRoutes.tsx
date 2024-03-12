import PersonalMyInformationStep from '~/pages/personal/myInformationStep/Step';
import PersonalMyRomanceStep from '~/pages/personal/myRomanceStep/Step';
import PersonalMyPreferTypeStep from '~/pages/personal/myPreferTypeStep/Step';
import PersonalPledgeStep from '~/pages/personal/pledgeStep/Step';

const personalRoutes = [
  {
    path: '/personal/myInformationStep',
    element: <PersonalMyInformationStep />,
  },
  {
    path: '/personal/myRomanceStep',
    element: <PersonalMyRomanceStep />,
  },
  {
    path: '/personal/myPreferTypeStep',
    element: <PersonalMyPreferTypeStep />,
  },
  {
    path: '/personal/pledgeStep',
    element: <PersonalPledgeStep />,
  },
] as const;

export default personalRoutes;

export type PersonalPath = Extract<
  (typeof personalRoutes)[number]['path'],
  `/${string}`
>;

export type PersonalPathPostfixes =
  Extract<PersonalPath, `/personal/${string}`> extends `/personal/${infer T}`
    ? T
    : never;
