import React from 'react';
import { postJob } from '../../actions/jobs';
import { connect } from 'react-redux';

const job1 = {
  name: 'Sahara Reporters',
  vacancy: 'gullible folks'
}

export const PostJob = ({ dispatch, jobs }) => {
  console.log('jobs', jobs);
  return (
    <div>
      <p>post a new job</p>
      <button onClick={
        () => {
          dispatch(postJob(job1))
        }
      }>post job</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
};

export default connect(mapStateToProps)(PostJob);