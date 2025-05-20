import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';
import '../index.css';

export { render };
export { onHydrationEnd };

const helmetContext = {};

function render() {
  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
}

function onHydrationEnd() {
  console.log('Hydration finished');
}