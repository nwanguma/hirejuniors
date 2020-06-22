import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import routes from "../router/AppRouter";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

export const Layout = ({ layout }) => {
  return (
    <div className={styles.layout}>
      <Router>
        {layout.header && <Header />}
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
        {layout.footer && <Footer />}
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
  };
};

export default connect(mapStateToProps)(Layout);
