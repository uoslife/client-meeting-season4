// import PersonalMyInformationStep from '~/pages/personal/myInformationStep/Step';
// import PersonalMyRomanceStep from '~/pages/personal/myRomanceStep/Step';
// import PersonalMyPreferTypeStep from '~/pages/personal/myPreferTypeStep/Step';
// import PersonalPledgeStep from '~/pages/personal/pledgeStep/Step';
//
// const personalRoutes = [
//   {
//     path: '/personal/myInformationStep',
//     element: <PersonalMyInformationStep />,
//   },
//   {
//     path: '/personal/myRomanceStep',
//     element: <PersonalMyRomanceStep />,
//   },
//   {
//     path: '/personal/myPreferTypeStep',
//     element: <PersonalMyPreferTypeStep />,
//   },
//   {
//     path: '/personal/pledgeStep',
//     element: <PersonalPledgeStep />,
//   },
// ] as const;
//
// export default personalRoutes;

import LazyLoadRoute from '~/routes/lazyLoadRoute';

const PERSONAL_LAZY_ROUTES_LIST = [
  'myInformationStep',
  'myRomanceStep',
  'myPreferTypeStep',
  'pledgeStep',
];

const personalRoutes = PERSONAL_LAZY_ROUTES_LIST.map(component =>
  LazyLoadRoute({
    componentType: 'personal',
    componentName: component,
  }),
);

export default personalRoutes;
