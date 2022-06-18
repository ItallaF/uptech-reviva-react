import React from 'react';
import './style.module.scss';

import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import Routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Routes/>
    </RecoilRoot>
  </React.StrictMode>
);
