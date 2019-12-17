import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../actions/profile';

export const ProfileForm = () => {
  const [title, setTitle] = useState('');
  const [companyInfo, setcompanyInfo] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [job, setJob] = useState({ title, companyInfo, description, requirements, location, contact });

  const handleSumbitForm = (e) => {
    e.preventDefault();

  }

  const onTitleChange = (e) => {

  }

  const onCompanyInfoChange = (e) => {

  }

  const onDescriptionChange = (e) => {

  }

  const onRequirementsChange = (e) => {

  }

  const onLocationChange = (e) => {

  }

  const onContactChange = (e) => {

  }

  return (
    <form>
      <label>Title
        <input type="text"
          placeholder="Title"
          value={title}
          onChange={onTitleChange} />
      </label>
      <label>Organization description
        <input type="text"
          placeholder="Organization description"
          value={CompanyInfo}
          onChange={onCompanyInfoChange}
        />
      </label>
      <label>Requirements
        <input type="text"
          placeholder="Requirements"
          value={requirements}
          onChange={onRequirementsChange}
        />
      </label>
      <label>Location
        <input type="text"
          placeholder="Location"
          value={location}
          onChange={onLocationChange}
        />
      </label>
      <label>Description
        <input type="text"
          placeholder="Description URL"
          value={description}
          onChange={onDescriptionChange}
        />
      </label>
      <label>Contact
      <input type="text"
          placeholder="Contact email"
          value={contact}
          onChange={onContactChange}
        />
      </label>
    </form>
  )
}

export default connect()(ProfileForm);