import {
    FETCH_ANIMAL_REQUEST,
    FETCH_ANIMAL_SUCCESS,
    FETCH_ANIMAL_ERROR,
    ADOPT_ANIMAL_REQUEST,
    ADOPT_ANIMAL_SUCCESS,
    ADOPT_ANIMAL_ERROR
  } from '../actions/animal';
  
  const initialState = {
    dogData: [],
    catData: [],
    error: null,
    loading: false
  };
  
  export default function animalReducer(state = initialState, action) {
    if (action.type === FETCH_ANIMAL_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === FETCH_ANIMAL_SUCCESS) {
        if(action.animal.species === "dog"){
            return Object.assign({}, state, {
                loading: false,
                error: null,
                dogData: action.animal
        })
    } else {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            catData: action.animal
        })
    }
    } else if (action.type === FETCH_ANIMAL_ERROR) {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    } else if (action.type === ADOPT_ANIMAL_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === ADOPT_ANIMAL_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        error: null
      });
    } else if (action.type === ADOPT_ANIMAL_ERROR) {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    }
  
    return state;
  }