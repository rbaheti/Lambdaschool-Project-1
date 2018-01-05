import axios from 'axios';

export const SET_POST_DATA = 'SET_POST_DATA';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const ADD_POST = 'ADD_POST';

export const getPostData = () => {
	const postDataEndpoint = 'http://localhost:3030/posts';
	const postData = axios.get(postDataEndpoint);
    //console.log("postData: " + postData);

	return {
		type: SET_POST_DATA,
		payload: postData,
	};
}

export const setSearchText = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    text
  };
};

export const addPost = (post) => {
	const addPostEndpoint = 'http://localhost:3030/newpost';
	const addPostResponse = axios.post(addPostEndpoint, post);

	return {
		type: ADD_POST,
		payload: addPostResponse
	};
};