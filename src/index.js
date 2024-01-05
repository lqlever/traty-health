import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from './components/DirectDepositForm';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);