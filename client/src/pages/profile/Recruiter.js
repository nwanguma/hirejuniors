

import React, { useState } from 'react';
import { connect } from 'react-redux';
import startCreateProfile from '../../actions/profile';

export const RecruiterProfile = ({ dispatch }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [profileDetails, setProfileDetails] = useState(null);

  const onFirstnameChange = (e) => {
    const firstnameInputText = e.target.value;
    setFirstname(firstnameInputText);
  }

  const onLastnameChange = (e) => {
    const lastnameInputText = e.target.value;
    setLastname(lastnameInputText);
  }

  const onCompanyChange = (e) => {
    const companyInputText = e.target.value;
    setCompany(companyInputText);
  }

  const onPositionChange = (e) => {
    const positionInputText = e.target.value;
    setPosition(positionInputText);
  }

  const handleOnSubmit = (e) => {
    if (firstname && lastname && company && position) {
      startCreateProfile({
        firstname,
        lastname,
        company,
        position
      })
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input type='text' placeholder="Firstname" value={firstname} onChange={onFirstnameChange} />
      <input type='text' placeholder="Lastname" value={lastname} onChange={onLastnameChange} />
      <input type='text' placeholder="company" value={company} onChange={onCompanyChange} />
      <input type='text' placeholder="Position" value={position} onChange={onPositionChange} />
      <button type="submit">Register</button>
    </form>
  )
}

export default connect()(RecruiterProfile);