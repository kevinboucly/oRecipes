import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import LoginForm from 'src/containers/LoginForm';

const Page = ({ children }) => (
  <main className="page">
    <div className="page-title">
      <h1> oRecipes</h1>
      <LoginForm />
    </div>
    {children}
  </main>
);
Page.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Page;
