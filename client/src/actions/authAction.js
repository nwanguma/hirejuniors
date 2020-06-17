import axios from 'axios';

import { setErrors } from '../actions/errorsAction';

export const startRegisterUser = (payload, history) => dispatch => {
  axios.post('http://localhost:3000/api/users/register', payload)
    .then(res => {
      history.push('/profile');
    })
    .catch(err => {
      dispatch(setErrors(err.response.data));
    })
}

export const startLogin = (payload, history) => (dispatch) => {
  return axios.post('http://localhost:3000/api/users/login', payload)
    .then(res => {
      const token = res.data;

      localStorage.setItem('jwttoken', token);
      setToken(token);
      history.push('/profile');
    })
    .catch(err => {
      const error = err.response;
      console.log(error);
    })
}