import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './pages/cart';
import Home from './pages/home';
import './style.module.scss';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
  document.getElementById('root') 
);

