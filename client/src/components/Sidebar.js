import React from "react";

import { NavLink } from "react-router-dom";

import logoAlt from "../assets/images/logoAlt.svg";
import stats from "../assets/images/stats.svg";
import profile from "../assets/images/profile.svg";
import verification from "../assets/images/verification.svg";
import applications from "../assets/images/applications.svg";
import jobs from "../assets/images/jobs.svg";
import articles from "../assets/images/articles.svg";
import settings from "../assets/images/settings.svg";
import logout from "../assets/images/logout.svg";
import portfolio from "../assets/images/portfolio.svg";
import resources from "../assets/images/resources.svg";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logoAlt} />
        <span>ireJuniors</span>
      </div>
      <div className={styles.navigation}>
        <div className={styles.nav_item}>
          <NavLink to="/dashboard/overview">
            <img src={stats} />
            <span>Overview</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/dashboard/profile">
            <img src={profile} />
            <span>Profile</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/dashboard/verification">
            <img src={verification} />
            <span>Verification</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/dashboard/manage-applications">
            <img src={applications} />
            <span>Applications</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/jobs">
            <img src={jobs} />
            <span>Jobs</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/articles">
            <img src={articles} />
            <span>Articles</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/dashboard/portfolio">
            <img src={portfolio} />
            <span>Portfolio</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/resources">
            <img src={resources} />
            <span>Resources</span>
          </NavLink>
        </div>
      </div>
      <div className={styles.settings}>
        <div className={styles.nav_item}>
          <NavLink to="/dashboard/settings">
            <img src={settings} />
            <span>Settings</span>
          </NavLink>
        </div>
        <div className={styles.nav_item}>
          <NavLink to="/logout">
            <img src={logout} />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
