import {
  UPDATE_USERNAME
 } from '../actions';

export default (username = '', action) => {
	switch (action.type) {
    case UPDATE_USERNAME:
    	console.log("username: ", action.username);
    	return action.username;

    default:
      return username;
  }
};