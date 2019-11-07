import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

// condensed version 
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};



/*   before memoizing 
  export const fetchUser = function (id) {
  return async function (dispatch) {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data })
  };
} */;


/*  expanded with memoizaiton
export const fetchUser = function (id) {
  return function (dispatch) {
    _fetchUser(id, dispatch);
  }
};

const _fetchUser = _.memoize(async function (id, dispatch) {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data })
}) */

// condensed with memoization
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data })
});