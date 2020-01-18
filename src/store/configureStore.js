import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
import jobsReducer from '../reducers/jobs';
import profileReducer from '../reducers/profile';
import userReducer from '../reducers/user';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: filtersReducer,
      jobs: jobsReducer,
      profile: profileReducer,
      user: userReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store
};
