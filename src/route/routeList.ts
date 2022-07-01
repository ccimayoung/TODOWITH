import { ReactElement } from 'react';

import { Login, Main, SignUpEmail, SignUpEmail2, SignUpSNS } from './../page';
interface Route {
  id: string;
  path: string;
  page: () => ReactElement;
}

export const routeList: Route[] = [
  {
    id: 'main',
    path: '/',
    page: Main,
  },
  {
    id: 'main',
    path: '/signupemail',
    page: SignUpEmail2,
  },
  {
    id: 'main',
    path: '/signupsns',
    page: SignUpSNS,
  },
  {
    id: 'main',
    path: '/login',
    page: Login,
  },
];
