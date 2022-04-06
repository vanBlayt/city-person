import React, { useContext, useEffect } from 'react';
import './index.scss';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { post } from '../../axios';
import * as Api from '../../axios/API';
import { useNavigate } from "react-router-dom";
import { SetLocalStorage } from 'utils/cache';

// 改变登录状态
import { useLoginStatusChange } from 'store/commonHook'


function Login() {
  // 初始化form表单
  const {
    register,
    handleSubmit,
  } = useForm();
  // 跳转
  const navigator = useNavigate();

  //改变登录状态
  const [loginStatus] = useLoginStatusChange()

  async function loginSubmit(e: any) {
    try {
      const res = await post(Api.Login, {}, e)
      if (res && res.data) {
        // 登录成功
        const { token = '', user = {} } = res.data;
        const { username } = user;
        SetLocalStorage('token', token);
        SetLocalStorage('user', username);
        loginStatus(true);
        navigator('/');
      } else {
        // 登录失败 TODO
        console.log('账号或密码错误')

      }
    } catch (e: any) {
      throw new Error(e);
    }
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
