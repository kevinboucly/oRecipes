import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Recipe from 'src/containers/Recipe';
import Home from 'src/components/Home';

import './style.scss';

const App = ({ fetchRecipes, loading }) => {
  // console.log(loading);
  useEffect(fetchRecipes, []);
  return (
    <div className="test">
      <Nav />
      {!loading && (
        <>
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
        </>
      )}
      {loading && (
        <Page>
          <p className="loading">Veuillez patienter. Les recettes chargent</p>
        </Page>
      )}

    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default App;
