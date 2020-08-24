import React from 'react';
import { Route } from 'react-router-dom';

import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

import recipes from 'src/data';

const App = () => (
  <div>
    <Nav recipes={recipes} />
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
export default App;
