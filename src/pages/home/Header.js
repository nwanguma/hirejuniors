import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <header className="header">
      <Nav />
      <div className="text-box">
        <h1>
          <span className="heading__primary">Hire Juniors</span>
          <span className="heading__secondary">Junior friendly roles for Junior developers</span>
          <Link className="page-nav" role="button" to="/createprofile">Get started</Link>
        </h1>
      </div>
    </header>
  )
}