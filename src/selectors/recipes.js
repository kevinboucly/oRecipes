/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugByTitle = (title) => {
  const modifiedTitle = title.replace(/['&@]/g, '').replace(/[_]/g, '-');
  return slugify(modifiedTitle, {
    lower: true,
  // remove: /['&@]/g,
  });
};

export const getUrlByTitle = (title) => `/recipe/${getSlugByTitle(title)}`;

export const getRecipeBySlug = (state, slug) => state.recipes.list.find((recipe) => getSlugByTitle(recipe.title) === slug);
