import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';
import './index.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />} ></Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
