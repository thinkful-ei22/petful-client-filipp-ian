import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import animalReducer from './reducers/animal';

export default createStore(
  combineReducers({
    animal: animalReducer
  }),
  composeWithDevTools(applyMiddleware(thunk)));


