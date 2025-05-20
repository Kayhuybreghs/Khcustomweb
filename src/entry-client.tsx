import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactHelmet from 'react-helmet-async';
import App from './App';
import './index.css';

const helmetContext = {};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactHelmet.HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactHelmet.HelmetProvider>
  </StrictMode>
);