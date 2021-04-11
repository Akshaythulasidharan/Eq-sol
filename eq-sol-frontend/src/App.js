import React, { useState } from 'react';

//The main file where everything is happening, App is a functional component
function App() {
  //we will be using hooks for state management here useState returns
  //the current state value and function that updates the state
  const [value,setValue] = useState('EQ-Sol React App')
  //returns the JSX to be displayed
  return (
    <div className="App">
      <h1>{value}</h1>
    </div>
  );
}

export default App;
