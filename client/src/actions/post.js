import api from '../utils/api';
import { setAlert } from './alertActions';
import { GET_POSTS, POST_ERROR } from './types';

// eslint-disable-next-line
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get('/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
