import React from 'react';
import underConstruction from './under_construction.svg';
import './siteStatus.css';

export default () => {
  return (
    <div className="text-box">
      <img src={underConstruction} className="logo" alt="under construction sign" />
      <h3 className="text"><span role="img" aria-label="sad face emoji">&#128554;</span> Site is under construction, please come back soon!</h3>
    </div>
  )
}