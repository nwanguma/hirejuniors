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