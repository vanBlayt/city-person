import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Home from './Home';
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
      Route
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Home />} ></Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
