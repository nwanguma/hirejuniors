import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createProfile} from '../actions/profile';

export class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      age: '',
      skills: [],
      experience: '',
      github: '',
      portfolio: '',
      location: '',
      interests: [],
      hobbies: [],
      bio: '',      
    }
  }

  onFirstnameChange = () => {

  }

  onLastnameChange = () => {
    
  }

  onPhoneChange = () => {
    
  }

  onAgeChange = () => {
    
  }

  onSkillsChange = () => {
    
  }

  onExperienceChange = () => {
    
  }

  onGithubChange = () => {
    
  }

  onPortfolioChange = () => {
    
  }

  onLocationChange = () => {
    
  }

  onInterestsChange = () => {
    
  }

  onHobbiesChange = () => {
    
  }

  onBioChange = () => {
    
  }

  handleOnSubmit = () => {

  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} >
        <label>Firstname
          <input type="text" 
            onChange={this.onFirstnameChange} 
            placeholder="Firstname" 
            value={this.state.firstname} 
            autoFocus />
        </label>
        <label>Lastname
          <input type="text"
            onChange={this.onLastnameChange} 
            placeholder="Lastname" 
            value={this.state.lastname} />
        </label>
        <label>Phone number
          <input type="text"
            onChange={this.onPhoneChange} 
            placeholder="Phone number" 
            value={this.state.phone} />
        </label>
        <label>Age
          <input type="text"
            onChange={this.onAgeChange} 
            placeholder="Age" 
            value={this.state.age} />
        </label>
        <label>Skills
          <input type="text"
            onChange={this.onSkillsChange} 
            placeholder="Skills" 
            value={this.state.skills} />
        </label>
        <label>Experience
          <input type="text"
            onChange={this.onExperienceChange} 
            placeholder="Experience" 
            value={this.state.experience} />
        </label>
        <label>Github
          <input type="text"
            onChange={this.onGithubChange} 
            placeholder="Github profile" 
            value={this.state.github} />
        </label>
        <label>Portfolio
          <input type="text"
            onChange={this.onPortfolioChange} 
            placeholder="Portfolio" 
            value={this.state.portfolio} />
        </label>
        <label>Location
          <input type="text"
            onChange={this.onLocationChange}
            placeholder="Location" 
            value={this.state.location} />
        </label>
        <label>Interests
          <input type="text"
            onChange={this.onInterestsChange} 
            placeholder="Interests" 
            value={this.state.interests} />
        </label>      
        <label>Hobbies
          <input type="text"
            onChange={this.onHobbiesChange} 
            placeholder="Hobbies" 
            value={this.state.hobbies} />
        </label>
        <label>Bio
          <textarea 
            onChange={this.onBioChange}
            placeholder="Tell us about yourself"
            value={this.state.bio} />
        </label>
      </form>
    )
  }
};

export default connect()(ProfileForm);