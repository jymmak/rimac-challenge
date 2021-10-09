import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../views/Login";
import Plan from "../views/Plan";
import ThanksPage from "../views/ThanksPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/plan">
            <Plan />
          </Route>
          <Route path="/thanks">
            <ThanksPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
