import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { GoodsContextProvider } from './context/GoodsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoodsContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GoodsContextProvider>
    
  </React.StrictMode>
);