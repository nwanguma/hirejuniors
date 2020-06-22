import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateLayout } from "../../actions/layoutAction";
import Sidebar from "../../components/Sidebar";
import routes from "../../router/DashboardRouter";

import styles from "./Dashboard.module.scss";

export const Dashboard = ({ updateLayout }) => {
  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled)
      updateLayout({
        header: false,
        footer: false,
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.main}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                component={route.main}
                path={route.path}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLayout: (payload) => dispatch(updateLayout(payload)),
  };
};

export default connect(undefined, mapDispatchToProps)(Dashboard);
