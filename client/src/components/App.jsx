import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import PvEBoard from "./FightComponents/PvEContant/PvEBoard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/figth" component={FightApp} />
          <Route exact path="/figth/pve" component={PvEBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
