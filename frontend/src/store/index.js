import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //  for asynchronous actions
import jobReducer from './reducers/jobReducer';

const rootReducer = combineReducers({
  job: jobReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;