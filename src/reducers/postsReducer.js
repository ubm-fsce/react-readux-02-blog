export default (state = [], action) => {
  /*  if (action.type === 'FETCH_POSTS') { }
   return action.payload;
 }
 return state; */
  // switecher are most common in reducers.
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};