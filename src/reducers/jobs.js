const jobs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOBS':
      return [...state, action.job]
    default:
      return state;
  }
};

export default jobs;