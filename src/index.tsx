import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
