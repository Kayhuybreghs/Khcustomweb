import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';
import '../index.css';

export { render };
export { onHydrationEnd };

function render() {
  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
}

function onHydrationEnd() {
  console.log('Hydration finished');
}