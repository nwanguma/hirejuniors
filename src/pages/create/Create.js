import React from 'react';
import { connect } from 'react-redux';
import { createProfile, editProfile } from '../../actions/profile';

const demoProfile = {
  firstName: '',
  lastName: '',
  skills: '',
  age: '',
  experience: '',
  length: '',
  designation: '',
  linkedin: '',
  url: '',
  github: '',
  link: '',
  portfolio: '',
  page: '',
  link: '',
  preferred: '',
  salary: ''
}

export const CreateProfile = ({ dispatch, profile }) => {
  console.log(profile)
  return (
    <div>
      <p>This is the create profile page</p>
      <button onClick={() => {
        dispatch(createProfile(demoProfile))
      }}>Create Profile</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(CreateProfile);