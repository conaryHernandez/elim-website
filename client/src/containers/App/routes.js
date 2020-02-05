import Home from '../Home/Home';
import Common from '../Common/Common';
import History from '../History/History';
import General from '../General/General';
import Multimedia from '../Multimedia/Multimedia';
import Donations from '../Donations/Donations';
import Contact from '../Contact/Contact';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: false,
    path: '/common',
    component: Common
  },
  {
    exact: false,
    path: '/history',
    component: History
  },
  {
    exact: false,
    path: '/general',
    component: General
  },
  {
    exact: false,
    path: '/multimedia',
    component: Multimedia
  },
  {
    exact: false,
    path: '/donations',
    component: Donations
  },
  {
    exact: false,
    path: '/contact',
    component: Contact
  }
];

export default routes;
