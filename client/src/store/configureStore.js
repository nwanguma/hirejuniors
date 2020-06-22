import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import filtersReducer from "../reducers/filtersReducer";
import jobsReducer from "../reducers/jobsReducer";
import profileReducer from "../reducers/profileReducer";
import errorsReducer from "../reducers/errorsReducer";
import layoutReducer from "../reducers/layoutReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: filtersReducer,
      jobs: jobsReducer,
      profile: profileReducer,
      errors: errorsReducer,
      layout: layoutReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
