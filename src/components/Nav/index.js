import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Nav = ({ recipes }) => (
  <nav className="menu">
    {console.log(recipes)}
    <NavLink to="/" className="menu-link" activeClassName="menu-link--current">Accueil</NavLink>
    {recipes.map((recipe) => (
      <NavLink
        to="/recipe"
        exact
        key={recipe.id}
        className="menu-link"
        activeClassName="menu-link--current"
      >
        {recipe.title}

      </NavLink>
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
