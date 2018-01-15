import {
  SET_POST_DATA,
  ADD_POST,
  ADD_LIKES,
  ADD_COMMENT
 } from '../actions';

export default (allPosts = [], action) => {
	switch (action.type) {
    case SET_POST_DATA:
	    return action.payload.data;

    case ADD_POST:
		  return [action.payload.data, ...allPosts]; // adding new post to the previous allPosts array and
                                                 // returning the new allPosts array.

    case ADD_LIKES: {
      const tempAllPostArray = [];
      for(let i = 0; i < allPosts.length; ++i) {
        let currPost = allPosts[i];
        if(currPost._id === action.payload.data._id) {
          tempAllPostArray.push(action.payload.data);
        } else {
          tempAllPostArray.push(currPost);
        }
      }
      return tempAllPostArray;
    }

    case ADD_COMMENT: {
      const tempAllPostArray = [];
      for(let i = 0; i < allPosts.length; ++i) {
        let currPost = allPosts[i];
        if(currPost._id === action.payload.data._id) {
          tempAllPostArray.push(action.payload.data);
        } else {
          tempAllPostArray.push(currPost);
        }
      }
      return tempAllPostArray;
    }

    default:
      return allPosts;
  }
};