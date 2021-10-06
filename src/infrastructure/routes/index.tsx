import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../views/Login";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Layout>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
