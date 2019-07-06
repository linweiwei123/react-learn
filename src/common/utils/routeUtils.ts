import { push } from 'connected-react-router';

export const routeTo = (routerPath: string) => {
  return push(routerPath)
};