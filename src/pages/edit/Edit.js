import React from 'react';
import { connect } from 'react-redux';
import { createProfile, editProfile } from '../../actions/profile';

const updates = {
  firstName: 'Plenty of',
  lastName: 'Talk',
  skills: 'mad skills'
}

export const EditProfile = ({ dispatch, profile }) => {
  console.log(profile);
  return (
    <div>
      <p>This is the edit expense page</p>
      <button onClick={() => {
        dispatch(editProfile(updates))
      }}>Edit profile</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(EditProfile);