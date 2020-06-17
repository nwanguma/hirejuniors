import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { startRegisterUser } from '../../actions/authAction';

export const Signup = ({ errors, startRegisterUser, history }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [signupErrors, setSignupErrors] = useState({});

  useEffect(() => {
    if (errors.errors) {
      setSignupErrors(errors.errors);
    }
  });

  const onEmailChange = (e) => {
    const emailTextInput = e.target.value.trim();
    setEmail(emailTextInput);
  }

  const onUsernameChange = (e) => {
    const usernameInputText = e.target.value.trim();
    setUsername(usernameInputText);
  }

  const onPasswordChange = (e) => {
    const passwordInputText = e.target.value.trim();
    setPassword(passwordInputText);
  }

  const onRoleChange = (e) => {
    const roleInputText = e.target.value.trim();
    setRole(roleInputText);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      username,
      password,
      role
    }
    startRegisterUser(newUser, history);
  }

  return (
    <form onSubmit={handleOnSubmit} className="signup-form"
      style={{ display: "flex", flexDirection: "column" }}>
      <p>{signupErrors.email}</p>
      <input value={email} type="text" placeholder="Email" onChange={onEmailChange} />
      {signupErrors.username ? <p>{signupErrors.username}</p> : null}
      <input value={username} type="text" placeholder="Username" onChange={onUsernameChange} />
      {signupErrors.email ? <p>{signupErrors.password}</p> : null}
      <input value={password} type="text" placeholder="Password" onChange={onPasswordChange} />
      {signupErrors.role ? <p>{signupErrors.role}</p> : null}
      <label htmlFor="developer">Developer</label>
      <input value="developer" type="radio"
        name="role" onChange={onRoleChange}
        placeholder="developer" checked={role === 'developer'}
      />
      <label htmlFor="recruiter">Recruiter</label>
      <input value="recruiter" type="radio"
        name="role" onChange={onRoleChange}
        checked={role === 'recruiter'} />
      <button type="submit">Sign up</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  }
}

export default connect(mapStateToProps, { startRegisterUser })(withRouter(Signup));