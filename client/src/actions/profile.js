import axios from 'axios';
import { setAlert } from './alertActions';
import { GET_PROFILE, PROFILE_ERROR } from './types';

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
