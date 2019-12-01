import { configureStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authentication from '../reducers/authentication';
import filters from '../reducers/filters';
import jobs from '../reducers/jobs';
import profile from '../reducers/profile';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  combineReducers({
    authentication: authentication,
    filters: filters,
    jobs: jobs,
    profile: profile,    
  }),
  applyMiddleware(composeEnhancer(thunk))
);

export default store;