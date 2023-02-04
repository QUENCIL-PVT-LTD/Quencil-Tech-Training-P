import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from "../src/components/pages/Index"
import Nav from "./components/navbar/Nav";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Index />
          </Route>
        </Switch>
    </Router>
  )
}

export default App