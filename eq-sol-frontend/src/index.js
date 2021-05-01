import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//index.js only connects main component App to div#root , now go to App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

