// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3ProviderWrapper } from './Web3Context';

ReactDOM.render(
  <React.StrictMode>
    <Web3ProviderWrapper>
      <App />
    </Web3ProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
