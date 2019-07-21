import Dashboard from '../pages/containers/Dashboard';
import { IRouteNode } from '../common/types';

const routes: IRouteNode[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    isAsync: false,
    options: {
      exact: true
    }
  },
  {
    path: '/agent',
    name: 'Agent',
    component: () => import ('../pages/containers/Agent'),
    isAsync: true
  },
  {
    path: '/my-cruise',
    name: 'My CRUISE',
    component: () => import ('../pages/containers/MyCruise'),
    isAsync: true
  },
  {
    path: '/help',
    name: 'HELP',
    component: () => import ('../pages/containers/Help'),
    isAsync: true
  }
];

export default routes;