import React from 'react';
import './App.css';
import Multiplier  from './components/Multiplier';
import EvenClicks  from './components/EvenClicks';
import CountBy  from './components/CountBy';
import HideMe  from './components/HideMe';
import MinimumLength  from './components/MinimumLength';

function App() {
  return (
    <div className="App container">
      <Multiplier x= { 2 } y= { 3 }/>
      <EvenClicks />
      <CountBy step= { 5 }/>
      <HideMe>Hey there to hide me!</HideMe>
      <MinimumLength length= { 30 }/>
    </div>
  );
}

export default App;
 