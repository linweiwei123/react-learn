import * as React from 'react';

const Login = ({ gotoPage } : any) => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => gotoPage('/')}>回首页</button>
    </div>
  )
};

export default Login