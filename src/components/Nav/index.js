import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Nav = ({ recipes }) => (
  <nav className="menu">
    {console.log(recipes)}
    <a className="menu-link menu-link--current">Accueil</a>
    {recipes.map((recipe) => (
      <a key={recipe.id} className="menu-link">{recipe.title}</a>
    ))}

  </nav>
);
Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Nav;
