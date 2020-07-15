import { lazy } from 'react';
import Home from '../Home/Home';

const Contact = lazy(() => import('../Contact/Contact'));
const History = lazy(() => import('../History/History'));
const General = lazy(() => import('../General/General'));
const Multimedia = lazy(() => import('../Multimedia/Multimedia'));
const Donations = lazy(() => import('../Donations/Donations'));
const Live = lazy(() => import('../Live/Live'));
const Mission = lazy(() => import('../Mission/Mission'));
const Churches = lazy(() => import('../Mission/Churches'));
const Central = lazy(() => import('../Central/Central'));
const Worship = lazy(() => import('../Central/Worship'));
const Kids = lazy(() => import('../Central/Kids'));
const Youth = lazy(() => import('../Central/Youth'));
const Lessons = lazy(() => import('../Central/Lessons'));
const Calendar = lazy(() => import('../Calendar/Calendar'));

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/calendario',
    component: Calendar,
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
    path: '/corazones-generosos',
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
  {
    exact: false,
    path: '/alabanza',
    component: Worship,
  },
  {
    exact: false,
    path: '/escuela-biblica',
    component: Kids,
  },
  {
    exact: false,
    path: '/jovenes-elim',
    component: Youth,
  },
  {
    exact: false,
    path: '/elim-central',
    component: Central,
  },
  {
    exact: false,
    path: '/escuela-biblica-lecciones',
    component: Lessons,
  },
];

export default routes;
