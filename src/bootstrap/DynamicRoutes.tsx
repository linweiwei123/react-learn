import * as React from 'react';
import routes from './routes.config';
import { Route, Switch } from 'react-router';
import asyncComponent from '../components/AsyncComponent';
import LoadingComponent from '../components/Loading/Loading';

const DynamicRoutes = () => {

  return (
    <Switch>
      {
        routes.map((item, index) => {
          const Component: any = item.isAsync ? asyncComponent(item.component, LoadingComponent) : item.component;
          return <Route key={index} path={item.path} component={Component} {...item.options} />
        })
      }
    </Switch>
  )
};

export default DynamicRoutes