import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
  type: ADOPT_CAT_ERROR,
  error
});

export const fetchCat = () => (dispatch) => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`)
    .then(res => res.json())
    .then((cat) => {
      console.log("hey its the cat!!",cat)
      dispatch(fetchCatSuccess(cat));
    })
    .catch(err => {dispatch(fetchCatError(err));
    });
};

export const adoptCat = () => (dispatch) => {
  dispatch(adoptCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json'
    }
  })
  .then(() => {
    dispatch(adoptCatSuccess());
  })
  .then(() => {
    dispatch(fetchCat());
  })
  .catch(err => {dispatch(adoptCatError(err));
  });
}