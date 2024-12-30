/**
 * Entry point of the application.
 * Renders the root component and initializes the application.
 * @module index
 */
import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store/redux-store';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
