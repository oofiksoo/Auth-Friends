import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App-Main">
        <div className="Nav-Bar">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
          <Switch>
            <PrivateRoute exact path="/FriendsList" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
