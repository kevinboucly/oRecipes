// import {} from 'src/actions';
import {
  CHANGE_VALUE, LOGIN, FINISH_LOADING, CONNECT,
} from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  logged: false,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CONNECT:
      return {
        ...state,
        logged: true,
      };
    default:
      return state;
  }
};

export default reducer;
