import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from '../actions/types';

const initialstate = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

// eslint-disable-next-line
export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_LIKES:
      return {
        ...state, // post._ID in DB === post that we give a like in UI
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };

    default:
      return state;
  }
}
