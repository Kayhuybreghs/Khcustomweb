import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';

export { render };
export { onBeforeRender };

async function onBeforeRender(pageContext: any) {
  const { url } = pageContext;
  return {
    pageContext: {
      url
    }
  };
}

async function render(pageContext: any) {
  const { url } = pageContext;
  const helmetContext = {};

  const app = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as any;

  return escapeInject`<!DOCTYPE html>
    <html lang="nl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(helmet?.title?.toString() || '')}
        ${dangerouslySkipEscape(helmet?.meta?.toString() || '')}
        ${dangerouslySkipEscape(helmet?.link?.toString() || '')}
        <link rel="stylesheet" href="/src/index.css">
        <link rel="stylesheet" href="/src/styles/animations.css">
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(app)}</div>
      </body>
    </html>`;
}