import { lazy } from 'react';
import Home from '../Home/Home';
import Common from '../Common/Common';

const Contact = lazy(() => import('../Contact/Contact'));
const History = lazy(() => import('../History/History'));
const General = lazy(() => import('../General/General'));
const Multimedia = lazy(() => import('../Multimedia/Multimedia'));
const Donations = lazy(() => import('../Donations/Donations'));
const Live = lazy(() => import('../Live/Live'));
const Mission = lazy(() => import('../Mission/Mission'));
const Churches = lazy(() => import('../Mission/Churches'));

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
  {
    exact: false,
    path: '/elim-live',
    component: Live,
  },
  {
    exact: false,
    path: '/mision-elim-honduras',
    component: Mission,
  },
  {
    exact: false,
    path: '/iglesias',
    component: Churches,
  },
];

export default routes;
