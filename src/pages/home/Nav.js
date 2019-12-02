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
        <li className="nav__list__item"><a href="/dashboard">Sign in</a></li>
        <li className="nav__list__item"><a href="/companies">For companies</a></li>
      </ul >
    </nav >
  )
}