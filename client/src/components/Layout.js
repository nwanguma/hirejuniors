import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "../router/AppRouter";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

export const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Router>
        <Header />
        <div className={styles.main}>
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
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
