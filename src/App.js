import React from 'react';
import './App.css';
import Multiplier  from './components/Multiplier';
import EvenClicks  from './components/EvenClicks';
import CountBy  from './components/CountBy';

function App() {
  return (
    <div className="App container">
      <Multiplier x= { 2 } y= { 3 }/>
      <EvenClicks />
      <CountBy step= { 5 }/>
    </div>
  );
}

export default App;
