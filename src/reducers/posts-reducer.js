import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST: {
      const newState = {
        all: state.all,
        post: action.payload,
      };
      return newState;
    }
    case ActionTypes.FETCH_POSTS: {
      const newState = {
        all: action.payload,
        post: state.post,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default PostsReducer;
