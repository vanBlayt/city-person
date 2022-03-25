// 库
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
// 组件
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
// 状态管理
import Store from './store';
// 路由鉴权
import { RequireAuth } from '@/router/routerAuth'

ReactDOM.render(
  // <React.StrictMode>
  <Store>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RequireAuth >
          <Home />
        </RequireAuth>} />
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </BrowserRouter>
  </Store>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
