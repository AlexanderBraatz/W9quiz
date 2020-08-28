import React from 'react';
import './App.css';
import Multiplier  from './components/Multiplier';
import EvenClicks  from './components/EvenClicks';

function App() {
  return (
    <div className="App container">
      <Multiplier x= { 2 } y= { 3 }/>
      <EvenClicks />
    </div>
  );
}

export default App;
