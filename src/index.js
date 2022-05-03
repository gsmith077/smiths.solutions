import React from 'react';
import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

);

// Don't register the service worker; It will break since we load the markdown
// files on request.
serviceWorker.unregister();
