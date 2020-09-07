import axios from 'axios';

import { FETCH_RECIPES, saveRecipes, getError } from 'src/actions/recipes';
import { LOGIN, finishLoading, connect } from 'src/actions/user';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // console.log(response.data);
          const saveRecipesAction = saveRecipes(response.data);
          store.dispatch(saveRecipesAction);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(getError());
        });
      break;
    case LOGIN: {
      const state = store.getState();
      console.log('state', state);
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          store.dispatch(connect());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      next(action);
      break; }
    default:
      next(action);
  }
  next(action);
};

export default api;
