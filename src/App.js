import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  } from "react-router-dom";

import './App.css';
import Multiplier  from './components/Multiplier';
import EvenClicks  from './components/EvenClicks';
import CountBy  from './components/CountBy';
import HideMe  from './components/HideMe';
import MinimumLength  from './components/MinimumLength';

function App() {
  return (
    <Router>
      <div className="App container">
        <Route path= "/even-clicks">
          <EvenClicks />
        </Route>

        <Route path= "/hide-me">
          <HideMe>Hey there click here to hide me!</HideMe>
        </Route>

        <Route path= "/count-by/:step"
          render={( { match } ) => ( <CountBy step= { match.params.step }/> ) } />

        <Route path= "/minimum/:l" 
          render= {( { match } ) => ( <MinimumLength length= { match.params.l }/> ) } />
     
        <Route path= "/multiplier/:x/:y" 
          render={( { match } ) => ( <Multiplier x= { match.params.x } y= { match.params.y }/> ) } />
         

      </div>
    </Router>
  );
}

export default App;
 