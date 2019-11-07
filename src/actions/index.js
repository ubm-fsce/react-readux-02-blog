import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data })
  };
};

// condensed version 
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};