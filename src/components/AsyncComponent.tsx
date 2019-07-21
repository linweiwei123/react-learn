import * as React from 'react';
import { IAsyncComponentState } from './interface';
import { delayLoad } from '../common/utils/commonUtils';

const asyncComponent = (loadComponent: any, LoadingComponent: any) => {
  return class AsyncComponent extends React.Component<any, IAsyncComponentState> {
    constructor(props: any){
      super(props);
      this.state = {
        component: null
      };
    };

    componentWillMount(){
      if(!this.hasLoadedComponent()){
        loadComponent()
          .then((module: { default: any; }) => delayLoad(module.default))
          .then((component: any) => {
            this.setState({component})
          })
          .catch( (err: Error) => {
            console.error(`Cannot load component in <AsyncComponent />`);
            throw err;
          })
      }
    }

    hasLoadedComponent(){
      return this.state.component !== null;
    }

    render(){
      const Component= this.state.component;
      return Component ? (
        <Component {...this.props} />
      ) : LoadingComponent? (
        <LoadingComponent {...this.props}/>
      ) : null;
    }

  }
};


export default asyncComponent;