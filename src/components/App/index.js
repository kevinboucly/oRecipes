import React from 'react';

import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Recipe from 'src/components/Recipe';
// import Home from 'src/components/Home';

import recipes from 'src/data';

const App = () => (
  <div>
    <Nav />
    {/* <Page>
      <Home />
    </Page> */}
    <Page>
      <Recipe recipe={recipes[0]} />
    </Page>

  </div>
);
export default App;
