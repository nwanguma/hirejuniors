const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateLoginInput = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.username) && (Validator.isEmpty(data.email))) {
    errors.credentials = 'Please enter username or email';
  }

  if (!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
    errors.credentials = 'Please enter a valid email in the format user@example.com';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}