import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Default from './styles/default'

ReactDOM.render(
  <React.StrictMode>
    <Default />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);