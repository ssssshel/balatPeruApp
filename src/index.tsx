import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import '../src/theme/main.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
defineCustomElements(window)
