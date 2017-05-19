import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import AuthReducer from './auth-reducer';
import UsersReducer from './users-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  users: UsersReducer,
});

export default rootReducer;
