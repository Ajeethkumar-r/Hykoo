import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
} from '../constants/registerConstants';
import { setAlert } from './alertActions';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_LOAD_FAIL,
    });
  }
};

export const registerAuth =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post('/api/users', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(setAlert('Successfully registered', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.map((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
