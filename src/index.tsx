import React from 'react';
import { GlobalStyle } from './globalStyle';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { ProductProvider } from './contexts/productContext';
import { CartProvider } from './contexts/cartContenxt';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ProductProvider>
      <CartProvider>
      <Routes />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
