const profile = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_PROFILE':
      return action.profile;
    case 'EDIT_PROFILE':
      return { ...state, ...action.updates };
    default:
      return state;
  }
};

export default profile;