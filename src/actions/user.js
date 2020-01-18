import axios from 'axios';

// export const registerUser = (payload) => {
//   return {
//     type: 'REGISTER_USER',
//     userDetails: payload
//   }
// };

export const startRegisterUser = (payload) => {
  console.log(payload);
  console.log('action', payload);
  return () => {
    return axios.post('http://localhost:3000/api/users/register', payload)
      .then(res => {
        const data = res.data;
        // registerUser(data);
        console.log(data);
      })
      .catch(err => {
        const error = err.response;
        console.log(error);
      })
  }
}