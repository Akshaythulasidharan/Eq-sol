import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Render functions has 2 parameters one is component to be displayed ie App in app.js and
// the tag where it has to be placed, here inside root div tag so getbyid('root') 
//index.js only connects main component App to div#root , now go to App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

