import React from 'react';
import ProfileForm from '../../components/ProfileForm.js';
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

export const AddProfile = ({ dispatch, profileInfo }) => {
  console.log(profileInfo);
  const onCreateProfile = (profile) => {
    dispatch(createProfile(profile));
  }
  return (
    <div>
      <p>This is the create profile page</p>
      <ProfileForm page="Create Profile"
        createProfile={onCreateProfile}/>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profile
  }
}

export default connect(mapStateToProps)(AddProfile);