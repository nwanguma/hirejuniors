import React from 'react';

export default () => {
  return (
    <nav id="primary-navigation" className="main-nav">
      <div className="logo-box">
        <img src="/"
          alt="site logo"
          className="logo" />
      </div>
      <ul className="nav__list">
        <li className="nav__list__item">Sign in</li>
        <li className="nav__list__item">Sign up</li>
      </ul>
    </nav>
  )
}