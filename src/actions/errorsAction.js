import { SET_ERRORS, CLEAR_ERRORS } from './types';

export const setErrors = (payload) => {
  return {
    type: SET_ERRORS,
    payload
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}