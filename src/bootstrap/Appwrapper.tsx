import { hot } from 'react-hot-loader';
import App from './App';

const isDev = process.env.NODE_ENV === 'development';

let AppWrapper = App;

// 这里用if是为了dev的热更新的包裹代码不加入prod
if(isDev){
    AppWrapper = hot(module)(App);
}

export default AppWrapper