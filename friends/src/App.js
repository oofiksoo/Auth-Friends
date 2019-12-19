import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";

function App() {
  return (
    <Router>
      <div className="AppMain">
        <div className="NavBar">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
          <Switch>
            <PrivateRoute exact path="/FriendList" component={FriendList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
