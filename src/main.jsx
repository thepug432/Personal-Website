import './main.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Nav from './Nav'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
