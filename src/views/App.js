import React from "react";
import "./App.scss";

import Nav from "./nav/nav";
import Home from "./example/Home";
import About from "./example/About";
import News from "./example/News";
import ListUser from "./Users/ListUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    name: "",
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/user">
                <ListUser />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
