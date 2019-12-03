import React from 'react';
import { connect } from 'react-redux';
import {createProfile} from '../actions/profile';

export const ProfileForm = () => {
  const handleSumbitForm = (e) => {
    e.preventDefault();
    
  }
  return (
    <form>
      <label>Firstname<input type="text" /></label>
      <label>Lastname<input type="text"/></label>
      <label>Phone number<input type="text"/></label>
      <label>Age<input type="text"/></label>
      <label>Skills<input type="text"/></label>
      <label>Experience<input type="text"/></label>
      <label>Github<input type="text"/></label>
      <label>Portfolio<input type="text"/></label>
      <label>Preferred salary<input type="text"/></label>
      <label>Upload CV<input type="text"/></label>
      <label>Designation<input type="text"/></label>
      <label>Location<input type="text"/></label>
      <label>Hobbies<input type="text"/></label>
      <label>Interests<input type="text"/></label>
      <label>Stuff<input type="text"/></label>
      <label>Stuff<input type="text"/></label>
      <label>Stuff<input type="text"/></label>
      <label>Stuff<input type="text"/></label>
      <label>Tell us about you<textarea /></label>
    </form>
  )
}

export default connect()(ProfileForm);