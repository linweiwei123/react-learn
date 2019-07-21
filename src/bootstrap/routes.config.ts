import Dashboard from '../pages/containers/Dashboard';
import { IRouteNode } from '../common/types';

const routes: IRouteNode[] = [
  {
    path: '/',
    name: 'Dashboard',
    icon: 'icon-dashboard',
    component: Dashboard,
    isAsync: false,
    options: {
      exact: true
    }
  },
  {
    path: '/agent',
    name: 'Agent',
    icon: 'icon-sitemap',
    component: () => import ('../pages/containers/Agent'),
    isAsync: true
  },
  {
    path: '/my-cruise',
    name: 'My CRUISE',
    icon: 'icon-boat',
    component: () => import ('../pages/containers/MyCruise'),
    isAsync: true
  },
  {
    path: '/help',
    name: 'HELP',
    icon: 'icon-life-bouy',
    component: () => import ('../pages/containers/Help'),
    isAsync: true
  }
];

export default routes;