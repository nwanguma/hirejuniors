export default (state = [], action) => {
  switch (action.type) {
    case 'POST_JOB':
      return [...state, action.job];
    default:
      return state;
  }
}