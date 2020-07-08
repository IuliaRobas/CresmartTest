import React from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import Dashboard from "./components/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute
            restricted={false}
            path="/"
            exact
            component={Authentication}
          />
          <PublicRoute
            restricted={true}
            path="/dashboard"
            exact
            component={Dashboard}
          />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
