import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </BrowserRouter>,
);

