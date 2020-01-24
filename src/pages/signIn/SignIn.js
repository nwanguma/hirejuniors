// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { startLogin } from '../../actions/user.js';
// import SignInForm from '../../components/SignInForm';

// export const SignIn = ({ dispatch }) => {
//     const [credentials, setCredentials] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});

//     const onCredentialsChange = (e) => {
//         const credentialsInputText = e.target.value.trim();

//         if (credentialsInputText.length === 0) {
//             const credentialsErrorText = "Please enter emaail or password";
//             setErrors({ ...errors, credentials: credentialsErrorText });
//         }
//         setCredentials(credentialsInputText);
//         setErrors({ ...errors, credentials: '' });
//     }

//     const onPasswordChange = (e) => {
//         const passwordInputText = e.target.value.trim();

//         if (passwordInputText.length === 0) {
//             const passwordErrorText = "Please enter password";
//             setErrors({ ...errors, password: passwordErrorText });
//         }
//         setPassword(passwordInputText);
//         setErrors({ ...errors, password: '' });
//     }

//     const handleOnSubmit = (e) => {
//         e.preventDefault();

//         if (credentials && password) {
//             console.log('this did not run');
//             dispatch(startLogin({
//                 credentials,
//                 password,
//             }));

//             setCredentials('');
//             setPassword('');
//         }
//     }

//     return (
//         <form onSubmit={handleOnSubmit}>
//             <input value={credentials} type="text" placeholder="Enter Email or Username" onChange={onCredentialsChange} />
//             <input value={password} type="text" placeholder="Password" onChange={onPasswordChange} />
//             <button type="submit">Login</button>
//         </form>
//     )
// };

// export default connect()(SignIn);