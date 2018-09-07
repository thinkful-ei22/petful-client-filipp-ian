import {API_BASE_URL} from '../config';

export const FETCH_ANIMAL_REQUEST = 'FETCH_ANIMAL_REQUEST';
export const fetchAnimalRequest = () => ({
  type: FETCH_ANIMAL_REQUEST
});

export const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS';
export const fetchAnimalSuccess = animal => ({
  type: FETCH_ANIMAL_SUCCESS,
  animal
});

export const FETCH_ANIMAL_ERROR = 'FETCH_ANIMAL_ERROR';
export const fetchAnimalError = error => ({
  type: FETCH_ANIMAL_ERROR,
  error
});

export const ADOPT_ANIMAL_REQUEST = 'ADOPT_ANIMAL_REQUEST';
export const adoptAnimalRequest = () => ({
  type: ADOPT_ANIMAL_REQUEST
})

export const ADOPT_ANIMAL_SUCCESS = 'ADOPT_ANIMAL_SUCCESS';
export const adoptAnimalSuccess = () => ({
  type: ADOPT_ANIMAL_SUCCESS
});

export const ADOPT_ANIMAL_ERROR = 'ADOPT_ANIMAL_ERROR';
export const adoptAnimalError = error => ({
  type: ADOPT_ANIMAL_ERROR,
  error
});

export const ADD_ANIMAL_REQUEST = 'ADD_ANIMAL_REQUEST';
export const addAnimalRequest = () => ({
  type: ADD_ANIMAL_REQUEST
});

export const ADD_ANIMAL_SUCCESS = 'ADD_ANIMAL_SUCCESS';
export const addAnimalSuccess = animal => ({
  type: ADD_ANIMAL_SUCCESS,
  animal
});

export const ADD_ANIMAL_ERROR = 'ADD_ANIMAL_ERROR';
export const addAnimalError = error => ({
  type: ADD_ANIMAL_ERROR,
  error
});


export const fetchAnimal = (species) => (dispatch) => {
  dispatch(fetchAnimalRequest());
  return fetch(`${API_BASE_URL}/api/${species}`)
    .then(res => res.json())
    .then((animal) => {
      dispatch(fetchAnimalSuccess(animal));
    })
    .catch(err => {dispatch(fetchAnimalError(err));
    });
};

export const adoptAnimal = (species) => (dispatch) => {
  dispatch(adoptAnimalRequest());
  return fetch(`${API_BASE_URL}/api/${species}`, {
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json'
    }
  })
  .then(() => {
    dispatch(adoptAnimalSuccess());
  })
  .then(() => {
    dispatch(fetchAnimal(species));
  })
  .catch(err => {dispatch(adoptAnimalError(err));
  });
}

export const addAnimal = (animal) => (dispatch) => {
  dispatch(addAnimalRequest());
  return fetch(`${API_BASE_URL}/api/${animal.species}`, {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(animal)
  })
  .then(() => {
    dispatch(addAnimalSuccess());
  })
  .catch(err => {dispatch(addAnimalError(err));
  });
}