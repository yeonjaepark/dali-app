import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER: {
      const newState = {
        authenticated: true,
      };
      return newState;
    }
    case ActionTypes.DEAUTH_USER: {
      const newState = {
        authenticated: false,
      };
      return newState;
    }
    case ActionTypes.AUTH_ERROR: {
      const newState = {
        authenticated: false,
      };
      return newState;
    }
    default:
      return state;
  }
};


export default AuthReducer;
