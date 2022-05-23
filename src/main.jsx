import './main.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import NavContextProvider from './hooks/NavHook'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <NavContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <App /> } />
        </Routes>
      </BrowserRouter>
    </NavContextProvider>
  </React.StrictMode>
);
