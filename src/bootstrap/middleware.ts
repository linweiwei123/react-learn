import { isPromise } from '../common/utils/commonUtils';

export const promiseMiddle = (store: any) => (next: any) => (action: any) => {
  if(!isPromise(action.payload)){
    return next(action);
  }

  // 预留：dispatch 请求开始
  action.payload
    .then((res: any) => {
      action.payload = res;
      // 预留：dispatch 请求结束
      store.dispatch(action);
    })
    .catch((err: Error) => {
      action.isError = true;
      action.payload = err;
      console.log('请求失败');
      // 预留：dispatch 请求结束
      store.dispatch(action);
    })

};