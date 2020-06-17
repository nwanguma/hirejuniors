import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startCreateProfile } from '../../actions/profile';

export const DeveloperProfile = ({ dispatch }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [location, setLocation] = useState('');
  const [experienceLength, setExperienceLength] = useState('');
  const [githubURL, setGithubURL] = useState('');
  const [isEmployed, setIsEmployed] = useState('');
  const [about, setAbout] = useState('');
  const [profileDetails, setProfileDetails] = useState(null);

  const onFirstnameChange = (e) => {
    const firstnameInputText = e.target.value;
    setFirstname(firstnameInputText);
  }

  const onLastnameChange = (e) => {
    const lastnameInputText = e.target.value;
    setLastname(lastnameInputText);
  }

  const onAgeChange = (e) => {
    const AgeInputText = e.target.value;
    setAge(AgeInputText);
  }

  const onSexChange = (e) => {
    const sexInputText = e.target.value;
    setSex(sexInputText);
  }

  const onSkillsChange = (e) => {
    const skillsInputText = e.target.value;
    setSkills(skillsInputText);
  }

  const onBioChange = (e) => {
    const bioInputText = e.target.value;
    setBio(bioInputText);
  }

  const onExperienceChange = (e) => {
    const experienceInputText = e.target.value;
    setExperience(experienceInputText);
  }

  const onEducationChange = (e) => {
    const educationInputText = e.target.value;
    setEducation(educationInputText);
  }

  const onLocationChange = (e) => {
    const locationInputText = e.target.value;
    setLocation(locationInputText);
  }

  const onExperienceLengthChange = (e) => {
    const experienceLengthInputText = e.target.value;
    setExperienceLength(experienceLengthInputText);
  }

  const onGithubURLChange = (e) => {
    const githubURLInputText = e.target.value;
    setGithubURL(githubURLInputText);
  }

  const onIsEmployedChange = (e) => {
    const isEmployedInputText = e.target.value;
    setIsEmployed(isEmployedInputText);
  }

  const onAboutChange = (e) => {
    const aboutInputText = e.target.value;
    setAbout(aboutInputText);
  }

  const handleOnSubmit = (e) => {
    if (firstname && lastname && age && sex && skills && bio && experience && education
      && location && experienceLength && githubURL && isEmployed && about) {
      startCreateProfile({
        firstname,
        lastname,
        age,
        sex,
        skills,
        bio,
        experience,
        education,
        location,
        experienceLength,
        githubURL,
        isEmployed,
        about
      })
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input type='text' placeholder="Firstname" value={firstname} onChange={onFirstnameChange} />
      <input type='text' placeholder="Lastname" value={lastname} onChange={onLastnameChange} />
      <input type='text' placeholder="Age" value={age} onChange={onAgeChange} />
      <input type='text' placeholder="Sex" value={sex} onChange={onSexChange} />
      <input type='text' placeholder="Skills" value={skills} onChange={onSkillsChange} />
      <input type='text' placeholder="Bio" value={bio} onChange={onBioChange} />
      <input type='text' placeholder="Experience" value={experience} onChange={onExperienceChange} />
      <input type='text' placeholder="Education" value={education} onChange={onEducationChange} />
      <input type='text' placeholder="Location" value={location} onChange={onLocationChange} />
      <input type='text' placeholder="ExperienceLength" value={experienceLength} onChange={onExperienceLengthChange} />
      <input type='text' placeholder="GithubURL" value={githubURL} onChange={onGithubURLChange} />
      <input type='text' placeholder="IsEmployed" value={isEmployed} onChange={onIsEmployedChange} />
      <textArea placeholder="About" value={about} onChange={onAboutChange} />
      <button type="submit">Register</button>
    </form>
  )
}

export default connect()(DeveloperProfile);