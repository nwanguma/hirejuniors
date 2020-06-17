import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <header className="header">
      <div className="text-box">
        <h1 className="heading">
          <span className="heading__primary">Hire Juniors</span>
          <span className="heading__secondary">Junior friendly roles for Junior developers</span>
          <Link className="heading__nav" role="button" to="/createprofile">Get started</Link>
        </h1>
      </div>
    </header>
  )
}