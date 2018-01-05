import {
  SET_POST_DATA,
  ADD_POST
 } from '../actions';

export default (allPosts = [], action) => {
	switch (action.type) {
    case SET_POST_DATA:
	    return action.payload.data;

    case ADD_POST:
		  return [...allPosts, action.payload.data]; // adding new post to the previous allPosts array and
                                                 // returning the new allPosts array.

    default:
      return allPosts;
  }
};