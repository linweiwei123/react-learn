import { RouteProps } from 'react-router';
import { ComponentType } from 'react';

export interface StoreState {
    userInfo: IUserInfo,
    clickCounts: number,
    articles: any
}

export interface IUserInfo {
    name: string;
    level: number;
}

export interface IRouteNode {
  path: any,
  name: string,
  component: ComponentType | (() => Promise<any>),
  isAsync?: boolean,
  options?: RouteProps
}