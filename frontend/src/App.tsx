import React from "react";
import "./App.css";
import Login from "./components/login/login";
import { Route, Switch } from "react-router-dom";
import { pages } from "./constants/navigation";
import Registartion from "./components/registration/registration";
import Return from "./components/return/return";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path={pages.REGISTRATION} component={Registartion}></Route>
          <Route path={pages.RETURN} component={Return}></Route>
          <Route exact path={pages.HOME} component={Login}></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
