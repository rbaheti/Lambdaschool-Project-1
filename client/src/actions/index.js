import axios from 'axios';

export const SET_POST_DATA = 'SET_POST_DATA';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const ADD_POST = 'ADD_POST';
export const ADD_LIKES = 'ADD_LIKES';

export const getPostData = () => {
	const postDataEndpoint = 'http://localhost:3030/posts';
	const postData = axios.get(postDataEndpoint);
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

export const addPost = (instaPost) => {
	const addPostEndpoint = 'http://localhost:3030/newpost';
	const addPostResponse = axios.post(addPostEndpoint, instaPost);
	return {
		type: ADD_POST,
		payload: addPostResponse
	};
};

export const addLikes = (postid) => {
	const addLikeEndpoint = 'http://localhost:3030/likes';
	const addLikesResponse = axios.post(addLikeEndpoint, {"id": postid});
	return {
		type: ADD_LIKES,
		payload: addLikesResponse
	};
}