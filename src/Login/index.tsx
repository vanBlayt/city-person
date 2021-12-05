import React from 'react';
import './index.scss';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';


function Login() {
  // 初始化form表单
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function loginSubmit(e: any) {
    const { username, password } = e;
    console.log(username, password);
  }

  return (
    <div className='login-wrapper'>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(loginSubmit)}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="用户名"
            autoComplete="username"
            autoFocus
            {...register('username')}
            required
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            登录
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
