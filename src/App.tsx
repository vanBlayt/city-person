import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
// 组件
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Story from './components/Story';
import AddStory from './components/AddStory';

// 路由鉴权
import { RequireAuth } from '@/router/routerAuth'

//utils
import { GetLocalStorage, SetLocalStorage } from 'utils/cache'

// API
import { get } from './axios'
import { CheckToken } from './axios/API'

//状态管理
import { useLoginStatusChange } from 'store/commonHook'
export default function App() {

  // 等待token check 完成
  const [status, changeStatus] = useState(false);
  const [dispatchLoginStatus] = useLoginStatusChange();

  // token 校验
  useEffect(() => {
    const token = GetLocalStorage('token');
    if (!token) {
      changeStatus(true);
      return;
    };
    get(CheckToken).then((res) => {
      // token 有效
      dispatchLoginStatus(true)
    }).catch((err) => {
      // code 401
      dispatchLoginStatus(false);
      SetLocalStorage('token', '')
    }).finally(() => {
      changeStatus(true)
    })
  }, [])
  return status ? (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RequireAuth >
          <Home />
        </RequireAuth>} />
        <Route path='story' element={<RequireAuth>
          <Story />
        </RequireAuth>} />
        <Route path="addStory" element={<RequireAuth><AddStory /></RequireAuth>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <div>loading...</div>
  )
}
