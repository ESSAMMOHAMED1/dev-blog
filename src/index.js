import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ContextProvider from './context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

