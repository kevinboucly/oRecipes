import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Recipe from 'src/containers/Recipe';
import Home from 'src/components/Home';

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
      <Route path="/recipe/:slug" exact>
        <Page>
          <Recipe />
        </Page>
      </Route>

    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
};
export default App;
