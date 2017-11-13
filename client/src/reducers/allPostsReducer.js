import {
  SET_POST_DATA
 } from '../actions';

export default (allPosts = [], action) => {
	switch (action.type) {
    case SET_POST_DATA:
      //console.log("reducer: ", action);
      return action.payload.data;

    default:
      return allPosts;
  }
};