import { combineReducers } from 'redux';
import MembersReducer from './members-reducer';

const rootReducer = combineReducers({
  members: MembersReducer,
});

export default rootReducer;
