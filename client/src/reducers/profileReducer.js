const defaultState = {
  firstName: '',
  lastName: '',
  skills: '',
  age: '',
  experience: '',
  length: '',
  designation: '',
  linkedin: '',
  url: '',
  github: '',
  link: '',
  portfolio: '',
  page: '',
  preferred: '',
  salary: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      console.log('something happened here again');
      return action.profile;
    case 'EDIT_PROFILE':
      console.log('something happened here');
      return { ...state, ...action.updates };
    default:
      return state;
  }
};