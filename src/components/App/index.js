import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

import recipes from 'src/data';

const App = ({ fetchRecipes }) => {
  useEffect(fetchRecipes, []);
  return (
    <div>
      <Nav />
      <Route path="/" exact>
        <Page>
          <Home />
        </Page>
      </Route>
      <Route path="/recipe" exact>
        <Page>
          <Recipe recipe={recipes[1]} />
        </Page>
      </Route>

    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
};
export default App;
