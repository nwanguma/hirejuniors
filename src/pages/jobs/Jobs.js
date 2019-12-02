import React from 'react';
import { connect } from 'react-redux';

export const Jobs = ({ jobs }) => {
  console.log(jobs);
  return (
    <div>
      <p>This is the jobs page</p>
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