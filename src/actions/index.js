import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=y_park';

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch((error) => {
      dispatch({ type: 'FETCH_POSTS_FAIL', payload: error });
    });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      dispatch({ type: 'CREATE_POST', payload: history.push('/') });
    }).catch((error) => {
      dispatch({ type: 'CREATE_POST_FAIL', payload: error });
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post).then((response) => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      dispatch({ type: 'UPDATE_POST_FAIL', payload: error });
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      dispatch({ type: 'FETCH_POST_FAIL', payload: error });
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: 'DELETE_POST', payload: history.push('/') });
    }).catch((error) => {
      dispatch({ type: 'DELETE_POST_FAIL', payload: error });
    });
  };
}
