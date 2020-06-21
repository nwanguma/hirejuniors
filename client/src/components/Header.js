import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import styles from "./Header.module.scss";

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_box}>
        <img className={styles.logo} src={logo} alt="hirejuniors logo" />
        <span className={styles.logo_text}>ireJuniors</span>
      </div>
      <nav className={styles.navigation_primary}>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-up">Blog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
