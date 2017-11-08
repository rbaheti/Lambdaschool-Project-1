import { combineReducers } from 'redux';
import allPostsReducer from './allPostsReducer';
import searchTextReducer from './searchTextReducer';

const rootReducer = combineReducers({
  allPosts: allPostsReducer,
  searchText: searchTextReducer
});

export default rootReducer;