const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateDeveloperProfileInput = (data) => {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.age = !isEmpty(data.age) ? data.age : +data.age;
  data.sex = !isEmpty(data.sex) ? data.sex : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';

  if (data.experience) {
    data.experience.company = !isEmpty(data.experience.company) ? data.experience.company : '';
    data.experience.title = !isEmpty(data.experience.title) ? data.experience.title : '';
    data.experience.isCurrent = !isEmpty(data.experience.isCurrent) ? data.experience.isCurrent : '';
    data.experience.from = !isEmpty(data.experience.from) ? data.experience.from : '';
    data.experience.to = !isEmpty(data.experience.to) ? data.experience.to : '';
    data.experience.location = !isEmpty(data.experience.location) ? data.experience.location : '';
    data.experience.description = !isEmpty(data.experience.description) ? data.experience.description : '';
  }

  if (data.education) {
    data.education.institution = !isEmpty(data.education.institution) ? data.education.institution : '';
    data.education.degree = !isEmpty(data.education.degree) ? data.education.degree : '';
    data.education.from = !isEmpty(data.education.from) ? data.education.from : '';
    data.education.to = !isEmpty(data.education.to) ? data.education.to : '';
  }

  data.location = !isEmpty(data.location) ? data.location : '';
  data.experienceLength = !isEmpty(data.experienceLength) ? data.experienceLength : '';
  data.githubURL = !isEmpty(data.githubURL) ? data.githubURL : '';
  data.website = !isEmpty(data.website) ? data.website : '';
  data.linkedinURL = !isEmpty(data.linkedinURL) ? data.linkedinURL : '';
  data.twitterURL = !isEmpty(data.twitterURL) ? data.twitterURL : '';

  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname field is required';
  }

  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Lastname field is required';
  }

  if (!Validator.toInt(data.age)) {
    errors.age = 'Please enter valid age';
  }

  if (Validator.isEmpty(data.sex)) {
    errors.sex = 'Please select sex';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.position = 'Skills field is required';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'Bio field is required';
  }

  if (data.experience) {
    errors.experience = {}

    if (Validator.isEmpty(data.experience.company)) {
      errors.experience.company = 'Company field is required';
    }

    if (Validator.isEmpty(data.experience.title)) {
      errors.experience.title = 'Title field is required';
    }

    if (!Validator.toBoolean(data.experience.isCurrent)) {
      errors.experience.isCurrent = 'Please select current field';
    }

    if (!Validator.toDate(data.experience.from)) {
      errors.experience.from = 'Please enter start date';
    }

    if (!Validator.toDate(data.experience.to)) {
      errors.experience.to = 'Please enter end date';
    }

    if (Object.keys(errors.experience).length === 0) {
      delete errors.experience
    }
  }

  if (data.education) {
    errors.education = {}

    if (Validator.isEmpty(data.education.institution)) {
      errors.education.institution = 'Institution field is required';
    }

    if (Validator.isEmpty(data.education.degree)) {
      errors.education.degree = 'Degree field is required';
    }

    if (!Validator.toDate(data.education.from)) {
      errors.education.from = 'Please select start date';
    }

    if (!Validator.toDate(data.education.to)) {
      errors.education.to = 'Please select end date';
    }

    if (Object.keys(errors.education).length === 0) {
      delete errors.education
    }
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }

  if (Validator.isEmpty(data.experienceLength)) {
    errors.experienceLength = 'Please select experience length';
  }

  if (Validator.isEmpty(data.githubURL)) {
    errors.githubURL = 'Please enter githubURL';
  }

  if (Validator.isEmpty(data.website)) {
    errors.website = 'Website field is required';
  }

  if (Validator.isEmpty(data.linkedinURL)) {
    errors.linkedinURL = 'LinkedinURL is required';
  }

  if (Validator.isEmpty(data.twitterURL)) {
    errors.twitterURL = 'TwitterURL is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}