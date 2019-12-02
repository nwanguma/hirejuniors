import React from 'react';
import Nav from './Nav';

export default (props) => {
  return (
    <header className="header">
      <Nav />
      <div className="text-box">
        <h1>
          <span className="heading__primary">Hire Juniors</span>
          <span className="heading__secondary">Junior friendly roles for Junior developers</span>
          <a className="page-nav" role="button" href="/createProfile">Get started</a>
        </h1>
      </div>
    </header>
  )
}