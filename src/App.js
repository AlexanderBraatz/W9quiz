import React from 'react';
import './App.css';
import Multiplier  from './components/Multiplier' 

function App() {
  return (
    <div className="App container">
      <Multiplier x= { 2 } y= { 3 }/>
    </div>
  );
}

export default App;
