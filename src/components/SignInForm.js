import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../actions/profile';

export const ProfileForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [organization, setOrganization] = useState('');
  const [position, setPosition] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [jobspostedcount, setJobspostedcount] = useState('');
  const [profile, setProfile] = useState({ firstname, lastname, organization, position, linkedin, jobspostedcount });

  const handleSumbitForm = (e) => {
    e.preventDefault();

  }

  const onFirstnameChange = (e) => {

  }

  const onLastnameChange = (e) => {

  }

  const onLinkedinChange = (e) => {

  }

  const onOrganizationChange = (e) => {

  }

  const onPositionChange = (e) => {

  }

  return (
    <form>
      <label>First name
        <input type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={onFirstnameChange} />
      </label>
      <label>Last name
        <input type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={onLastnameChange}
        />
      </label>
      <label>Organization
        <input type="text"
          placeholder="Organization"
          value={organization}
          onChange={onOrganizationChange}
        />
      </label>
      <label>Position
        <input type="text"
          placeholder="Position"
          value={position}
          onChange={onPositionChange}
        />
      </label>
      <label>LinkedIn
        <input type="text"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={onLinkedinChange}
        />
      </label>
    </form>
  )
}

export default connect()(ProfileForm);