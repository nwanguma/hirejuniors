import React from 'react';
import { connect } from 'react-redux';

export const Jobs = ({ jobs }) => {
  console.log(jobs);
  return (
    <div>
      <p>This is the jobs page, this page open to people regardless of authentication,
      the only difference is clicking on the individual jobs if unauthentication reroutes to sign in</p>
      <a href="/jobitem">more job</a>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
};

export default connect(mapStateToProps)(Jobs);