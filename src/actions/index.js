import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

// condensed version 
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });

};

export const fetchUser = function (id) {
  return async function (dispatch) {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data })
  };
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  /*  alternate with lodash approach below
   const uniqueUserids = _.uniq(_.map(getState().posts, 'userId'));
   console.log(uniqueUserids);
   uniqueUserids.forEach(id => dispatch(fetchUser(id))); */

  // with lodash ---
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
  console.log('withLodash');
}





/*  expanded with memoizaiton
export const fetchUser = function (id) {
  return function (dispatch) {
    _fetchUser(id, dispatch);
  }
};
//expanded with memoizaiton
const _fetchUser = _.memoize(async function (id, dispatch) {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data })
}) */

// condensed with memoization
/* export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data })
}); */

