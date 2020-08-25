/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugByTitle = (title) => slugify(title, { lower: true });

export const getUrlByTitle = (title) => `/recipe/${getSlugByTitle(title)}`;

export const getRecipeBySlug = (state, slug) => {
  return state.recipes.list.find((recipe) => {
   return getSlugByTitle(recipe.title) === slug;
  });
};

