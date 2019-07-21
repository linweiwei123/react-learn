import { RouteProps } from 'react-router';
import { ComponentType } from 'react';

export interface StoreState {
  agents: any;
}

export interface IRouteNode {
  path: any,
  name: string,
  icon?: string,
  component: ComponentType | (() => Promise<any>),
  isAsync?: boolean,
  options?: RouteProps
}
