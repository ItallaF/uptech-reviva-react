import React from 'react';
import { GlobalStyle } from './globalStyle';

import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import Routes from './routes';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  </React.StrictMode>
);
