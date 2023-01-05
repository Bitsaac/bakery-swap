import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import './index.css';
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from '@web3uikit/core';



ReactDOM.render(
  <React.StrictMode>``
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);