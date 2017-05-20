import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  member: {},
};

const MembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MEMBER: {
      const newState = {
        all: state.all,
        member: action.payload,
      };
      return newState;
    }
    case ActionTypes.FETCH_MEMBERS: {
      const newState = {
        all: action.payload,
        member: state.member,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default MembersReducer;
