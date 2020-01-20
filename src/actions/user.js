import axios from 'axios';

// export const registerUser = (payload) => {
//   return {
//     type: 'REGISTER_USER',
//     userDetails: payload
//   }
// };

export const startRegisterUser = (payload) => {
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

export const startLogin = (payload) => {
  return () => {
    return axios.post('http://localhost:3000/api/users/login', payload)
      .then(res => {
        const header = res;
        const data = res.data;
        // registerUser(data);
        console.log(data);
        console.log(res);
      })
      .catch(err => {
        const error = err.response;
        console.log(error);
      })
  }
}