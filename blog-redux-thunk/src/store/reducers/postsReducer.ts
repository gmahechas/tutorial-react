const postsReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;