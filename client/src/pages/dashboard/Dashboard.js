import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';

export const Dashboard = ({ profile }) => {
  console.log(profile);
  return (
    <div>
      <Nav />
      <p>This is the dashboard page</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Dashboard);