import React from 'react';
import './index.scss';
function Login() {
  return (
    <div id="login">
      <h1>Login</h1>
      <form method="post">
        <input className='login-input' type="text" required placeholder="用户名" name="u"></input>
        <input className='login-input' type="password" required placeholder="密码" name="p"></input>
        <button className="but" type="submit">登录</button>
      </form>
    </div>
  );
}

export default Login;
