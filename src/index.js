import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FirebaseProvider } from './context/FirebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FirebaseProvider>
  </React.StrictMode>
);

