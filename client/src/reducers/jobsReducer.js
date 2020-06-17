const demoJob = {
  title: '',
  companyInfo: '',
  description: '',
  requirements: '',
  location: '',
  contact: '',
}

export default (state = [demoJob], action) => {
  switch (action.type) {
    case 'POST_JOB':
      return [...state, action.job];
    default:
      return state;
  }
}