import { lazy } from 'react';
import Home from '../Home/Home';
import Common from '../Common/Common';

const Contact = lazy(() => import('../Contact/Contact'));
const History = lazy(() => import('../History/History'));
const General = lazy(() => import('../General/General'));
const Multimedia = lazy(() => import('../Multimedia/Multimedia'));
const Donations = lazy(() => import('../Donations/Donations'));

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: false,
    path: '/common',
    component: Common,
  },
  {
    exact: false,
    path: '/history',
    component: History,
  },
  {
    exact: false,
    path: '/general',
    component: General,
  },
  {
    exact: false,
    path: '/multimedia',
    component: Multimedia,
  },
  {
    exact: false,
    path: '/donations',
    component: Donations,
  },
  {
    exact: false,
    path: '/contact',
    component: Contact,
  },
];

export default routes;
