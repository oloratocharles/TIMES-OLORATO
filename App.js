import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react";
import { NavigationBar } from './Components/LeftMenu';
import { Crawdads } from '/Components/Crawdads';
import { Malibu } from '/Components/Malibu';
import { TheSilent } from '/Components/TheSilent';
import { OfWomen } from '/Components/OfWomen';
import './App.css';

class App extends Component{
  render() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />

      {/* get */}
      <Switch>
  <Route exact path="/Components/Crawdads" component={Crawdads} />
  <Route path="/Components/Malibu" component={Malibu} />
  <Route path="/Components/TheSilent" component={TheSilent} />
  <Route path="/Components/OfWomen" component={OfWomen} />
  <Route component={NoMatch} />
</Switch>
    </Router>
  </React.Fragment>
    
    
  );
}
}

export default App;
