import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  user: {},
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER: {
      const newState = {
        all: state.all,
        user: action.payload,
      };
      return newState;
    }
    case ActionTypes.FETCH_USERS: {
      const newState = {
        all: action.payload,
        user: state.user,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default UsersReducer;
