import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startLogin } from '../../actions/authAction.js';

export const Signin = ({ dispatch }) => {
  const [credentials, setCredentials] = useState('');
  const [password, setPassword] = useState('');
  const [signinErrors, setSigninErrors] = useState({});

  const onCredentialsChange = (e) => {
    const credentialsInputText = e.target.value.trim();

    setCredentials(credentialsInputText);
  }

  const onPasswordChange = (e) => {
    const passwordInputText = e.target.value.trim();

    setPassword(passwordInputText);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    startLogin({
      credentials,
      password
    })
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input value={credentials} type="text" placeholder="Enter Email or Username" onChange={onCredentialsChange} />
      <input value={password} type="text" placeholder="Password" onChange={onPasswordChange} />
      <button type="submit">Login</button>
    </form>
  )
};

export default connect()(withRouter(Signin));