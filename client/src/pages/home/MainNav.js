import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <nav id="primary-navigation" className="main-nav">
      <div className="logo-box">
        <img src="/"
          alt="site logo"
          className="logo" />
      </div>
      <ul className="nav__list">
        <NavLink className="nav__list__item" to="/companies">For companies</NavLink>
        <NavLink className="nav__list__item" to="/jobs">Jobs</NavLink>
        <NavLink className="nav__list__item" to="/blog">Blog</NavLink>
        <NavLink className="nav__list__item" to="/signin">Sign in</NavLink>
        <NavLink className="nav__list__item" to="/signup">Sign up</NavLink>
      </ul>
    </nav>
  )
}