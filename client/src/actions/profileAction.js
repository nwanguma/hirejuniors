import axios from 'axios';
//actions

//create profile
export const createProfile = (profile) => ({
  type: 'CREATE_PROFILE',
  profile
});

//edit profile
export const editProfile = (updates) => ({
  type: 'EDIT_PROFILE',
  updates
});

export const startCreateProfile = (payload) => {
  return () => {
    return axios.post('http://localhost:3000/api/developers/create', payload)
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