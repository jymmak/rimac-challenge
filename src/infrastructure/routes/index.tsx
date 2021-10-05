import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../views/Login";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
