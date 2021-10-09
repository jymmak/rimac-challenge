import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../views/Login";
import Plan from "../views/Plan";
import ThanksPage from "../views/ThanksPage";

const AppRoutes: React.FC = () => {
  return (
    <Router basename ={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
        <Route path="/login" exact component={Login} />
          <Route path="/plan" exact component={Plan} />
          <Route path="/thanks" exact component={ThanksPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
