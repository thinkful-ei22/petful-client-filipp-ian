import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import catReducer from './reducers/cat';
import dogReducer from './reducers/dog';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  composeWithDevTools(applyMiddleware(thunk)));


