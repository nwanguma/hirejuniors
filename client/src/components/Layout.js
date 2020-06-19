import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "../router/AppRouter";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout";

export const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            );
          })}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
