// 库
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

// 状态管理
import Store from './store';


ReactDOM.render(
  // <React.StrictMode>
  <Store>
    <App />
  </Store>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
