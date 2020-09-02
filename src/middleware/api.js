import axios from 'axios';

import { FETCH_RECIPES, saveRecipes,getError } from 'src/actions/recipes';

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
    default:
      next(action);
  }
  next(action);
};

export default api;
