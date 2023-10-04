import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app/app';
import { appStore } from './store/store';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={appStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
