import React from 'react';
import Home from './Home';
import './styles.css';
import {BrowserRouter as Router,} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
