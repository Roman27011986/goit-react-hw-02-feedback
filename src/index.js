import 'modern-normalize/modern-normalize.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
// import { myAction } from './redux/actions';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
