import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startRegisterUser } from '../../actions/user';

export const SignUp = ({ dispatch }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const onEmailChange = (e) => {
    const emailTextInput = e.target.value.trim();

    if (emailTextInput.length === 0) {
      const emailErrorText = "Please enter a valid email in the format user@example.com";
      setErrors({ ...errors, email: emailErrorText });
    }
    else {
      setEmail(emailTextInput);
      setErrors({ ...errors, email: '' });
    }
  }

  const onUsernameChange = (e) => {
    const usernameInputText = e.target.value.trim();

    if (usernameInputText.length === 0) {
      const usernameErrorText = "Please enter username";
      setErrors({ ...errors, username: usernameErrorText });
    }
    else {
      setUsername(usernameInputText);
      setErrors({ ...errors, username: '' });
    }
  }

  const onPasswordChange = (e) => {
    const passwordInputText = e.target.value.trim();

    if (passwordInputText.length === 0) {
      const passwordErrorText = "Please enter password";
      setErrors({ ...errors, password: passwordErrorText });
    }
    else {
      setPassword(passwordInputText);
      setErrors({ ...errors, password: '' });
    }
  }

  const onRoleChange = (e) => {
    const roleInputText = e.target.value.trim();

    if (roleInputText.length === 0) {
      const roleErrorText = "Please select a role";
      setErrors({ ...errors, role: roleErrorText });
    }
    else {
      setRole(roleInputText);
      setErrors({ ...errors, role: '' });
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (email && username && password && role) {
      dispatch(startRegisterUser({
        email,
        username,
        password,
        role
      }));

      setEmail('');
      setUsername('');
      setPassword('');
      setRole('');
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input value={email} type="text" placeholder="Email" onChange={onEmailChange} />
      <input value={username} type="text" placeholder="Username" onChange={onUsernameChange} />
      <input value={password} type="text" placeholder="Password" onChange={onPasswordChange} />
      <label htmlFor="developer">Developer</label>
      <input value="developer" type="radio" name="role" onChange={onRoleChange} placeholder="developer" />
      <label htmlFor="recruiter">Recruiter</label>
      <input value="recruiter" type="radio" name="role" onChange={onRoleChange} />
      <button type="submit">Sign up</button>
    </form>
  )
}

export default connect()(SignUp);