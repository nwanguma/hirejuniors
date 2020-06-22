const initialState = {
  header: true,
  footer: true,
};

const layoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_LAYOUT":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default layoutReducer;
