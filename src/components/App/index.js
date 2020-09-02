import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Recipe from 'src/containers/Recipe';
import Home from 'src/components/Home';

import './style.scss';

const App = ({ fetchRecipes, loading, error }) => {
  const location = useLocation();
  // console.log(loading);
  useEffect(fetchRecipes, []);
  useEffect(() => {
    console.log('lacation a changé', location);
    console.log('un rendu a eu lieu');
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="test">
      <Nav />
      {!loading && error && (
        <Page>
          <p className="error">Une erreur s'est produite</p>
        </Page>
      )}
      {!loading && !error && (
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
  error: PropTypes.bool.isRequired,
};
export default App;
