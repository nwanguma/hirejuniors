const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateRecruiterProfileInput = (data) => {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.position = !isEmpty(data.position) ? data.position : '';

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

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  if (Validator.isEmpty(data.position)) {
    errors.position= 'Position field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}